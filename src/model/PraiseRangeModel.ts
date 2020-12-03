import { observable } from 'mobx';

export default class PraiseRangeModel {
    @observable private readonly _start!: number;
    @observable private readonly _end!: number;

    constructor({ end, start }: { end: number; start: number }) {
        this._end = end;
        this._start = start;
    }

    public get start() {
        return this._start;
    }

    public get end() {
        return this._end;
    }
}
