import React, { Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { MainPage, SearchPage, HistoryPage, CatalogPage, SubCatalogPage, InfoPage } from './page/index';
import MainStore from './store/MainStore';
import { Card, CardBody } from 'reactstrap';
import Header from './component/Header';
import Footer from './component/Footer';

export default class App extends Component {
    mainStore: MainStore;

    constructor(props) {
        super(props);
        this.mainStore = new MainStore();
    }

    render() {
        return (
            <Provider mainStore={this.mainStore}>
                <Suspense fallback={<div />}>
                    <Header />
                    <Card>
                        <CardBody>
                            <Switch>
                                <Route exact path="/catalog" component={CatalogPage} />
                                <Route exact path="/catalog/:start?" component={SubCatalogPage} />
                                <Route exact path="/search" component={SearchPage} />
                                <Route exact path="/history" component={HistoryPage} />
                                <Route exact path="/info" component={InfoPage} />
                                <Route exact path="/:no?" component={MainPage} />
                            </Switch>
                        </CardBody>
                    </Card>
                    <Footer />
                </Suspense>
            </Provider>
        );
    }
}
