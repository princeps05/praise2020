import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import MainStore from './store/MainStore';
import MainPage from './page/MainPage';
import SearchPage from './page/SearchPage';
import HistoryPage from './page/HistoryPage';
import CatalogPage from './page/CatalogPage';
import SubCatalogPage from './page/SubCatalogPage';
import InfoPage from './page/InfoPage';
import Header from './component/Header';
import Footer from './component/Footer';

export default class App extends Component {
    mainStore: MainStore;

    constructor(props) {
        super(props);
        this.mainStore = new MainStore();
    }

    render() {
        console.log('App');
        return (
            <Provider mainStore={this.mainStore}>
                <Header />

                <section>
                    <Switch>
                        <Route exact path="/catalog" component={CatalogPage} />
                        <Route exact path="/catalog/:start?" component={SubCatalogPage} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/history" component={HistoryPage} />
                        <Route exact path="/info" component={InfoPage} />
                        <Route exact path="/:no?" component={MainPage} />
                    </Switch>
                </section>

                <Footer />
            </Provider>
        );
    }
}
