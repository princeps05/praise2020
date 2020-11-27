import { observable } from 'mobx';

export default class PraiseRangeModel {
    @observable start?: number;
    @observable end?: number;

    constructor({ end, start }) {
        this.end = end;
        this.start = start;
    }
}
