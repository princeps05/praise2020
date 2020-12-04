import React, { Component } from 'react';

import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';
import SearchBar from '../component/SearchBar';
import PraiseList from '../component/PraiseList';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class SearchPage extends Component<MainStoreProps> {
    constructor(props: MainStoreProps) {
        super(props);
    }

    render() {
        return (
            <>
                <SearchBar />
                <PraiseList />
            </>
        );
    }
}

export default SearchPage;
