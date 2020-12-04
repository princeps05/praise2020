import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';
import Praise from '../component/Praise';

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
        return (
            <ListGroup flush>
                {this.props.mainStore?.savedPraiseList.map((praise) => {
                    return <Praise key={praise.no} praise={praise} />;
                })}
            </ListGroup>
        );
    }
}

export default SubHistoryPage;
