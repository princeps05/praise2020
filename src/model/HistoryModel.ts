import { observable } from 'mobx';
import { parse, format } from 'date-fns';

import SavedPraiseModel from './SavedPraiseModel';

export default class HistoryModel {
    @observable private readonly _savedDate!: string;
    @observable private readonly _formatedDate!: string;
    @observable private _savedList!: SavedPraiseModel[];

    constructor(savedDate: string) {
        this._savedDate = savedDate;
        this._formatedDate = format(parse(savedDate, 'yyyyMMdd', new Date()), 'yyyy.MM.dd');
    }

    public get savedDate() {
        return this._savedDate;
    }

    public get formatedDate() {
        return this._formatedDate;
    }

    public get savedList() {
        return this._savedList;
    }

    public set savedList(list: SavedPraiseModel[]) {
        this._savedList = list;
    }
}
