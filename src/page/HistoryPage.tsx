import React, { Component } from 'react';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';
import { ListGroup } from 'react-bootstrap';
import SavedDateList from '../component/SavedDateList';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class HistoryPage extends Component<MainStoreProps> {
    render() {
        return (
            <ListGroup>
                <SavedDateList savedDateList={this.props.mainStore?.savedDateList} />
            </ListGroup>
        );
    }
}

export default HistoryPage;
