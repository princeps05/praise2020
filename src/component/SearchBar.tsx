import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
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
            <InputGroup className="mb-3">
                <FormControl onChange={this.props.mainStore?.inputKeyword} placeholder="제목이나 번호를 입력하세요." aria-label="제목이나 번호를 입력하세요." value={this.props.mainStore?.keyword} />
                <InputGroup.Append>
                    <Button onClick={this.props.mainStore?.clearKeyword} variant="danger">
                        초기화
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

export default SearchBar;
