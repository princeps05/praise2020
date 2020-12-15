import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';
import { LinkContainer } from 'react-router-bootstrap';

interface MainStoreProps extends RouteComponentProps<any> {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class Footer extends Component<MainStoreProps> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Footer ');

        return (
            <footer>
                <Nav justify variant="tabs" onSelect={this.props.mainStore?.selectMenu}>
                    <MenuList menuList={this.props.mainStore?.menuList} />
                </Nav>
            </footer>
        );
    }
}

const MenuList = observer(({ menuList }) => {
    console.log('Footer MenuList');
    return menuList.map((menu) => {
        return <Menu key={menu.url} menu={menu} />;
    });
});

const Menu = observer(({ menu }) => {
    const { name, url, isActive } = menu;
    console.log('Footer Menu', url);
    return (
        <Nav.Item>
            <LinkContainer exact to={url}>
                <Nav.Link eventKey={url}>{name}</Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
});

export default withRouter(Footer);
