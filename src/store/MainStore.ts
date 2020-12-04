import { makeObservable, observable, action, transaction, computed } from 'mobx';
import { range } from 'lodash';
import PraiseModel from '../model/PraiseModel';
import PraiseRangeModel from '../model/PraiseRangeModel';

import { praiseList } from '../list.js';
import MenuModel from '../model/MenuModel';

export default class MainStore {
    DEFAULT_NO = 738;
    IMAGE_PATH = 'https://vespasiani.cdn3.cafe24.com/dure';
    RANGE_SIZE = 100;

    @observable menuList: MenuModel[] = [];

    @observable praiseList: PraiseModel[] = [];
    @observable selectedPraise: PraiseModel | undefined;

    @observable praiseRangeList: PraiseRangeModel[] = [];
    @observable selectedPraiseRange = 1;

    @observable keyword = '';

    maxNo = -1;

    constructor() {
        /* mobx6 변경 사항 */
        makeObservable(this);

        this.init();
    }

    @action.bound
    init() {
        transaction(() => {
            this.praiseList = praiseList.map((praise) => new PraiseModel(praise));
            this.maxNo = praiseList[praiseList.length - 1].no;

            this.setPraiseNo(this.DEFAULT_NO);
            this.setPraiseRangeList(praiseList.length);
            this.setDefaultMenuList();
        });
    }

    @action.bound
    selectPraise(no: number = this.DEFAULT_NO) {
        this.setPraiseNo(no);
    }

    @action.bound
    selectMenu(url: string) {
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

    @computed
    get searchedPraiseList() {
        if (!this.keyword.trim()) {
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

        if (!subPraiseRange || this.praiseList.length < 1) {
            return [];
        }

        return this.praiseList.filter((praise: PraiseModel) => praise.no >= subPraiseRange.start && praise.no <= subPraiseRange.end);
    }

    private setPraiseNo(no: number) {
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
