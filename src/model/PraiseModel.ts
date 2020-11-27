import { observable } from 'mobx';

export default class PraiseModel {
    @observable no: number;
    @observable title: string;
    @observable url?: string;

    constructor({ no, title }) {
        this.no = no;
        this.title = title;
    }
}
