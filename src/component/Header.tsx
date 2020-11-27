import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Badge, Button, Container, Row, Col } from 'reactstrap';
import MainStore from '../store/MainStore';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class Header extends Component<MainStoreProps> {
    render() {
        console.log('Header render');

        return (
            <Container fluid={true}>
                <Row>
                    <Col xs="2">
                        <Button
                            size="sm"
                            outline
                            color="primary"
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            back
                        </Button>
                    </Col>
                    <Title praise={this.props.mainStore?.selectedPraise} />
                    <Col xs="2">
                        <Button size="sm" outline color="primary">
                            back
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const Title = observer(({ praise }) => {
    console.log('Header Title');
    return (
        <Col xs="8">
            <h5 style={{ textAlign: 'center' }}>
                <Badge color="success" pill>
                    {praise.no}장
                </Badge>
                <Badge color="primary" pill>
                    {praise.title}
                </Badge>
            </h5>
        </Col>
    );
});

export default Header;
