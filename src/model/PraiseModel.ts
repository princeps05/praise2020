import { observable } from 'mobx';

export default class PraiseModel {
    @observable private readonly _no: number;
    @observable private readonly _title: string;
    @observable private _url: string;

    constructor({ no, title, url }: { no: number; title: string; url: string }) {
        this._no = no;
        this._title = title;
        this._url = url;
    }

    public get no() {
        return this._no;
    }

    public get title() {
        return this._title;
    }

    public get url() {
        return this._url ? this._url : '';
    }

    public set url(param: string) {
        this._url = param;
    }
}
