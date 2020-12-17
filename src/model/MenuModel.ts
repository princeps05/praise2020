import { observable } from 'mobx';

export default class MenuModel {
    @observable private readonly _name: string;
    @observable private readonly _url: string;

    constructor({ name, url }: { name: string; url: string }) {
        this._name = name;
        this._url = url;
    }

    public get name() {
        return this._name;
    }

    public get url() {
        return this._url;
    }
}
