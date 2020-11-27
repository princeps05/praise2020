import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';
import PraiseList from '../component/PraiseList';

interface MainStoreProps {
    mainStore?: MainStore;
    match?: any;
}

@inject('mainStore')
@observer
class SubCatalogPage extends Component<MainStoreProps> {
    constructor(props) {
        super(props);
        this.props.mainStore?.selectPraiseRange(parseInt(this.props.match.params.start, 10));
    }

    render() {
        console.log('CatalogPage');
        return (
            <ListGroup>
                <PraiseList praiseList={this.props.mainStore?.subPraiseList} />
            </ListGroup>
        );
    }
}

export default SubCatalogPage;
