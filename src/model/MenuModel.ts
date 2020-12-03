import { observable } from 'mobx';

export default class MenuModel {
    @observable private readonly _name: string;
    @observable private readonly _url: string;
    @observable private _isActive: boolean;

    constructor({ name, url, isActive }: { name: string; url: string; isActive: boolean }) {
        this._name = name;
        this._url = url;
        this._isActive = isActive;
    }

    public get name() {
        return this._name;
    }

    public get url() {
        return this._url;
    }

    public get isActive() {
        return this._isActive;
    }

    public set isActive(param: boolean) {
        this._isActive = param;
    }
}
