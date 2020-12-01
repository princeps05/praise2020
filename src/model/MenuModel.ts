import { observable } from 'mobx';

export default class MenuModel {
    @observable name: string;
    @observable url: string;
    @observable isActive: boolean;

    constructor({ name, url, isActive }) {
        this.name = name;
        this.url = url;
        this.isActive = isActive;
    }
}
