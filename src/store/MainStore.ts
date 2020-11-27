import { makeObservable, observable, action, configure, transaction, computed } from 'mobx';
import { range, cloneDeep } from 'lodash';
import PraiseModel from '../model/PraiseModel';
import PraiseRangeModel from '../model/PraiseRangeModel';

import { praiseList } from '../list.js';

export default class MainStore {
    DEFAULT_NO = 738;
    IMAGE_PATH = 'https://vespasiani.cdn3.cafe24.com/dure';
    RANGE_SIZE = 100;
    PAGE_SIZE = 24;

    @observable praiseList: PraiseModel[] = [];
    @observable selectedPraise;

    @observable praiseRangeList;
    @observable selectedPraiseRange;

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
            this.setPraiseRangeList(praiseList);
        });
    }

    @action.bound
    selectPraise(no: number = this.DEFAULT_NO) {
        this.setPraiseNo(no);
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

    @computed
    get searchedPraiseList() {
        if (!this.keyword.trim()) {
            return this.praiseList;
        }

        return this.praiseList.filter((praise) => {
            if (praise.no.toString().startsWith(this.keyword.toString()) || praise.title.indexOf(this.keyword.toString()) !== -1) {
                return praise;
            }
        });
    }

    @computed
    get subPraiseList() {
        const subPraiseRange = this.praiseRangeList.find((range) => range.start === this.selectedPraiseRange);

        if (this.praiseList.length < 1) {
            return;
        }

        return this.praiseList.filter((praise: PraiseModel) => praise.no >= subPraiseRange.start && praise.no <= subPraiseRange.end);
    }

    setPraiseNo(no: number) {
        const findItem = this.praiseList.find((item) => item.no === no);

        if (!findItem) {
            return;
        }

        this.selectedPraise = { ...findItem, url: `${this.IMAGE_PATH}${no}.jpg` };
    }

    setPraiseRangeList(praiseList: PraiseModel[]) {
        const praiseListLength = praiseList.length;
        const rangeArray = range(1, praiseListLength, this.RANGE_SIZE);

        this.praiseRangeList = rangeArray.map((rangeMin) => {
            return new PraiseRangeModel({
                start: rangeMin,
                end: rangeMin + this.RANGE_SIZE - 1 > praiseListLength ? praiseListLength : rangeMin + this.RANGE_SIZE - 1,
            });
        });
    }
}
