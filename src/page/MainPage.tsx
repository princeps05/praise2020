import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MainStore from '../store/MainStore';

interface MainStoreProps {
    mainStore?: MainStore;
    match?: any;
}

@inject('mainStore')
@observer
class MainPage extends Component<MainStoreProps> {
    constructor(props: MainStoreProps) {
        super(props);
        this.props.mainStore?.selectPraise(parseInt(this.props.match.params.no, 10));
    }

    render() {
        console.log('MainPage');
        return <img width="100%" src={this.props.mainStore?.selectedPraise!.url} alt={this.props.mainStore?.selectedPraise!.title} />;
    }
}

export default MainPage;
