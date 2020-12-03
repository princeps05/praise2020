import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';
import Praise from '../component/Praise';

interface MainStoreProps {
    mainStore?: MainStore;
    match?: any;
}

@inject('mainStore')
@observer
class SubCatalogPage extends Component<MainStoreProps> {
    constructor(props: MainStoreProps) {
        super(props);
        this.props.mainStore?.selectPraiseRange(parseInt(this.props.match.params.start, 10));
    }

    isItemLoaded = (index) => !!this.props.mainStore?.subPraiseList[index];

    row = ({ index, style }) => {
        const item = this.props.mainStore?.subPraiseList[index];

        return (
            <div className="ListItem" style={style}>
                <Praise praise={item} />
            </div>
        );
    };

    render() {
        console.log('CatalogPage');
        return (
            <ListGroup flush>
                <InfiniteLoader isItemLoaded={this.isItemLoaded} itemCount={this.props.mainStore?.subPraiseList.length} threshold={20}>
                    {({ onItemsRendered, ref }) => (
                        <List height={700} itemCount={this.props.mainStore?.subPraiseList.length} itemSize={50} onItemsRendered={onItemsRendered} ref={ref} width={'auto'}>
                            {this.row}
                        </List>
                    )}
                </InfiniteLoader>
            </ListGroup>
        );
    }
}

export default SubCatalogPage;
