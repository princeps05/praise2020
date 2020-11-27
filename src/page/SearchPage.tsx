import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button, ListGroup } from 'reactstrap';
import PraiseList from '../component/PraiseList';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class SearchPage extends Component<MainStoreProps> {
    render() {
        console.log('SearchPage');

        return (
            <>
                <InputGroup>
                    <Input defaultValue={''} onChange={this.props.mainStore?.inputKeyword} placeholder="제목이나 번호를 입력하세요." />
                    <InputGroupAddon addonType="append">
                        <Button color="danger">초기화</Button>
                    </InputGroupAddon>
                </InputGroup>
                <p />
                <ListGroup>
                    <PraiseList praiseList={this.props.mainStore?.searchedPraiseList} />
                </ListGroup>
            </>
        );
    }
}

export default SearchPage;
