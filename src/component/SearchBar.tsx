import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class SearchBar extends Component<MainStoreProps> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('SearchBar');

        return (
            <InputGroup>
                <Input onChange={this.props.mainStore?.inputKeyword} placeholder="제목이나 번호를 입력하세요." value={this.props.mainStore?.keyword} />
                <InputGroupAddon addonType="append">
                    <Button onClick={this.props.mainStore?.clearKeyword} color="danger">
                        초기화
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}

export default SearchBar;
