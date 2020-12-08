import { observable } from 'mobx';

export default class SavedPraiseModel {
    @observable private readonly _seq;
    @observable private readonly _no: number | undefined;
    @observable private readonly _title: string | undefined;

    constructor({ no, title }: { no: number | undefined; title: string | undefined }) {
        this._seq = new Date().getTime();
        this._no = no;
        this._title = title;
    }

    public get seq() {
        return this._seq;
    }

    public get no() {
        return this._no;
    }

    public get title() {
        return this._title;
    }
}
