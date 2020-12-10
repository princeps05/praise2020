import { makeObservable, observable, action, transaction, computed } from 'mobx';
import { range, isEmpty, sortBy } from 'lodash';
import { format } from 'date-fns';
import PraiseModel from '../model/PraiseModel';
import SavedPraiseModel from '../model/SavedPraiseModel';
import PraiseRangeModel from '../model/PraiseRangeModel';

import { praiseList } from '../list.js';
import MenuModel from '../model/MenuModel';
import HistoryModel from '../model/HistoryModel';

export default class MainStore {
    DEFAULT_NO = 738;
    IMAGE_PATH = 'https://vespasiani.cdn3.cafe24.com/dure';
    RANGE_SIZE = 100;

    @observable menuList: MenuModel[] = [];

    @observable praiseList: PraiseModel[] = [];
    @observable savedPraiseList: PraiseModel[] = [];
    @observable selectedPraise: PraiseModel | undefined;

    @observable praiseRangeList: PraiseRangeModel[] = [];
    @observable selectedPraiseRange = 1;

    @observable keyword: string | number = '';

    @observable isTodaySavedPraise = false;

    maxNo = -1;

    constructor() {
        /* mobx6 변경 사항 */
        makeObservable(this);

        this.init();
    }

    @action.bound
    init() {
        transaction(() => {
            this.praiseList = praiseList.map((praise) => new PraiseModel({ ...praise, url: '' }));
            this.maxNo = praiseList[praiseList.length - 1].no;

            this.setPraise(this.DEFAULT_NO);
            this.setPraiseRangeList(praiseList.length);
            this.setDefaultMenuList();
        });
    }

    @action.bound
    selectPraise(no: number = this.DEFAULT_NO) {
        this.setPraise(no);
    }

    @action.bound
    selectMenu(url) {
        console.log('selectMenu', url);
        this.menuList.forEach((menu: MenuModel) => {
            console.log(menu.url, url, url.indexOf(menu.url) > -1);
            menu.isActive = url.indexOf(menu.url) > -1;
        });
    }

    @action.bound
    selectPraiseRange(no = 1) {
        this.selectedPraiseRange = no;
    }

    @action.bound
    inputKeyword(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        if (typeof value !== 'number' && typeof value !== 'string') {
            return;
        }

        this.keyword = value;
    }

    @action.bound
    clearKeyword() {
        this.keyword = '';
    }

    @action.bound
    getSavedHistoryList(savedDate: string) {
        const praise = localStorage.getItem('praise');
        if (!praise) {
            return [];
        }

        const historyList = JSON.parse(praise);
        if (isEmpty(historyList)) {
            return [];
        }

        const findItem = historyList.find((history) => history._formatedDate === savedDate);

        const praiseList = findItem._savedList.map((item) => new PraiseModel({ no: item._no, title: item._title, url: `${this.IMAGE_PATH}${item._no}.jpg` }));

        this.savedPraiseList = sortBy(praiseList, 'seq');
    }

    @action.bound
    savePraise() {
        const today = format(new Date(), 'yyyyMMdd');
        // const today = '20201205';
        const praise = localStorage.getItem('praise');

        // 로컬스토리지에 아예 없는 경우
        if (!praise) {
            const savedList: SavedPraiseModel[] = [];
            savedList.push(new SavedPraiseModel({ no: this.selectedPraise?.no, title: this.selectedPraise?.title }));

            const historyModel = new HistoryModel(today);
            historyModel.savedList = savedList;

            const historyList: HistoryModel[] = [];
            historyList.push(historyModel);

            localStorage.setItem('praise', JSON.stringify(historyList));

            return;
        }

        const historyList = JSON.parse(praise);

        // 로컬스토리지의 오늘 날짜에 저장된 목록이 있는 경우
        if (!isEmpty(historyList) && !isEmpty(historyList.find((history) => history._savedDate === today))) {
            historyList.forEach((history) => {
                if (history._savedDate === today) {
                    const findItem = history._savedList.find((praise) => praise._no === this.selectedPraise?.no);

                    if (!findItem) {
                        history._savedList.push(new SavedPraiseModel({ no: this.selectedPraise?.no, title: this.selectedPraise?.title }));

                        localStorage.setItem('praise', JSON.stringify(historyList));

                        this.isTodaySavedPraise = true;
                    }
                }
            });

            return;
        }

        // 로컬스토리지의 오늘 날짜에 저장된 목록이 없는 경우
        const savedList: SavedPraiseModel[] = [];
        savedList.push(new SavedPraiseModel({ no: this.selectedPraise?.no, title: this.selectedPraise?.title }));

        const historyModel = new HistoryModel(today);
        historyModel.savedList = savedList;

        historyList.push(historyModel);

        localStorage.setItem('praise', JSON.stringify(historyList));

        this.isTodaySavedPraise = true;
    }

    @action.bound
    checkIsTodaySavedPraise() {
        const today = format(new Date(), 'yyyyMMdd');
        const praise = localStorage.getItem('praise');

        if (!praise) {
            this.isTodaySavedPraise = false;
            return;
        }

        const historyList = JSON.parse(praise);

        if (isEmpty(historyList)) {
            this.isTodaySavedPraise = false;
            return;
        }

        const todaySavedHistory = historyList.find((history) => history._savedDate === today);

        if (isEmpty(todaySavedHistory)) {
            this.isTodaySavedPraise = false;
            return;
        }

        const findItem = todaySavedHistory._savedList.find((praise) => praise._no === this.selectedPraise?.no);

        this.isTodaySavedPraise = !!findItem;
    }

    @computed
    get savedDateList() {
        const praise = localStorage.getItem('praise');
        if (!praise) {
            return [];
        }

        const historyList = JSON.parse(praise);
        if (isEmpty(historyList)) {
            return [];
        }

        return historyList.map((history) => history._formatedDate);
    }

    @computed
    get searchedPraiseList() {
        if (!this.keyword.toString().trim()) {
            return this.praiseList;
        }

        return this.praiseList.filter((praise: PraiseModel) => {
            if (praise.no.toString().startsWith(this.keyword.toString()) || praise.title.indexOf(this.keyword.toString()) !== -1) {
                return praise;
            }
        });
    }

    @computed
    get subPraiseList() {
        const subPraiseRange = this.praiseRangeList.find((range: PraiseRangeModel) => range.start === this.selectedPraiseRange);

        if (!subPraiseRange || isEmpty(this.praiseList)) {
            return [];
        }

        return this.praiseList.filter((praise: PraiseModel) => praise.no >= subPraiseRange.start && praise.no <= subPraiseRange.end);
    }

    private setPraise(no: number) {
        const findItem = this.praiseList.find((item: PraiseModel) => item.no === no);

        if (!findItem) {
            return;
        }

        findItem.url = `${this.IMAGE_PATH}${no}.jpg`;

        this.selectedPraise = findItem;
    }

    private setPraiseRangeList(praiseListLength: number) {
        const rangeArray = range(1, praiseListLength, this.RANGE_SIZE);

        this.praiseRangeList = rangeArray.map((rangeMin: number) => {
            return new PraiseRangeModel({
                start: rangeMin,
                end: rangeMin + this.RANGE_SIZE - 1 > praiseListLength ? praiseListLength : rangeMin + this.RANGE_SIZE - 1,
            });
        });
    }

    private setDefaultMenuList() {
        const menuList = [
            {
                name: '목차',
                url: '/catalog',
                isActive: false,
            },
            {
                name: '검색',
                url: '/search',
                isActive: false,
            },
            {
                name: '악보',
                url: '',
                isActive: false,
            },
            {
                name: '내역',
                url: '/history',
                isActive: false,
            },
            {
                name: '정보',
                url: '/info',
                isActive: false,
            },
        ];

        this.menuList = menuList.map((menu: { name: string; url: string; isActive: boolean }) => new MenuModel(menu));
    }
}
