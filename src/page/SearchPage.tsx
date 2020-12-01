import React, { Component } from 'react';

import Praise from '../component/Praise';
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
    constructor(props) {
        super(props);
    }

    render() {
        console.log('SearchPage');

        return (
            <>
                <SearchBar />
                <p />
                <PraiseList />
            </>
        );
    }
}

export default SearchPage;
