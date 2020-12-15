import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';
import SavedPraiseList from '../component/SavedPraiseList';

interface MainStoreProps {
    mainStore?: MainStore;
    match?: any;
}

@inject('mainStore')
@observer
class SubHistoryPage extends Component<MainStoreProps> {
    constructor(props: MainStoreProps) {
        super(props);
        this.props.mainStore?.getSavedHistoryList(this.props.match.params.savedDate);
    }

    render() {
        console.log('SubHistoryPage');
        return (
            <ListGroup variant="flush">
                <SavedPraiseList savedPraiseList={this.props.mainStore?.savedPraiseList} removePraise={this.props.mainStore?.removePraise} />
            </ListGroup>
        );
    }
}

export default SubHistoryPage;
