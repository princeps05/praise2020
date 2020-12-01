import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';
import PraiseRangeList from '../component/PraiseRangeList';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class CatalogPage extends Component<MainStoreProps> {
    render() {
        console.log('CatalogPage');
        return (
            <ListGroup>
                <PraiseRangeList praiseRangeList={this.props.mainStore?.praiseRangeList} />
            </ListGroup>
        );
    }
}

export default CatalogPage;
