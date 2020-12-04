import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';
import Praise from './Praise';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class PraiseList extends Component<MainStoreProps> {
    constructor(props) {
        super(props);
    }

    isItemLoaded = (index) => !!this.props.mainStore?.searchedPraiseList[index];

    row = ({ index, style }) => {
        const item = this.props.mainStore?.searchedPraiseList[index];

        return (
            <div className="ListItem" style={style}>
                <Praise praise={item} />
            </div>
        );
    };

    render() {
        console.log('PraiseList');

        return (
            <ListGroup flush>
                <InfiniteLoader isItemLoaded={this.isItemLoaded} itemCount={this.props.mainStore?.searchedPraiseList.length} threshold={20}>
                    {({ onItemsRendered, ref }) => (
                        <List height={window.innerHeight - 140} itemCount={this.props.mainStore?.searchedPraiseList.length} itemSize={50} onItemsRendered={onItemsRendered} ref={ref} width={'auto'}>
                            {this.row}
                        </List>
                    )}
                </InfiniteLoader>
            </ListGroup>
        );
    }
}

export default PraiseList;
