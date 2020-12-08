import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class InfoPage extends Component {
    render() {
        return (
            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        );
    }
}

export default InfoPage;
