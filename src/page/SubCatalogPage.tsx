import React, { Component, CSSProperties } from 'react';
import { Alert, Button, ListGroup } from 'react-bootstrap';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';
import Praise from '../component/Praise';
import { isEmpty } from 'lodash';

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

    isItemLoaded = (index: number) => !!this.props.mainStore?.subPraiseList[index];

    row = ({ index, style }: { index: number; style: CSSProperties }) => {
        const item = this.props.mainStore?.subPraiseList[index];

        return (
            <div className="ListItem" style={style}>
                <Praise praise={item} />
            </div>
        );
    };

    render() {
        console.log('CatalogPage');
        if (isEmpty(this.props.mainStore?.subPraiseList)) {
            return (
                <Alert variant="danger">
                    목차를 확인해주세요.
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => window.history.back()} variant="outline-danger">
                            뒤로 가기
                        </Button>
                    </div>
                </Alert>
            );
        }

        return (
            <ListGroup>
                <InfiniteLoader isItemLoaded={this.isItemLoaded} itemCount={this.props.mainStore?.subPraiseList.length} threshold={20}>
                    {({ onItemsRendered, ref }) => (
                        <List height={window.innerHeight - 100} itemCount={this.props.mainStore?.subPraiseList.length} itemSize={50} onItemsRendered={onItemsRendered} ref={ref} width={'auto'}>
                            {this.row}
                        </List>
                    )}
                </InfiniteLoader>
            </ListGroup>
        );
    }
}

export default SubCatalogPage;
