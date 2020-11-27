import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

import MainStore from '../store/MainStore';
import { Provider } from 'mobx-react';

export default class Layout extends Component<any> {
    private mainStore: MainStore = new MainStore();

    componentDidMount() {
        // console.log(this.props);
        // this.props.main.initPraiseList();
    }

    render() {
        return (
            <Provider mainStore={this.mainStore}>
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </Provider>
        );
    }
}
