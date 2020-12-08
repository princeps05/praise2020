import React, { Component } from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
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

    componentDidMount() {
        console.log('Footer componentDidMount', this.props.history);
    }

    componentDidUpdate() {
        console.log('Footer componentDidUpdate', this.props.location.pathname);
        // this.props.mainStore?.selectMenu(this.props.location.pathname);
    }

    render() {
        console.log('Footer ');

        return (
            <footer className="fixed-bottom">
                <Nav justify variant="tabs">
                    <MenuList menuList={this.props.mainStore?.menuList} selectMenu={this.props.mainStore?.selectMenu} />
                </Nav>
            </footer>
        );
    }
}

const MenuList = observer(({ menuList, selectMenu }) => {
    console.log('Footer MenuList');
    return menuList.map((menu) => {
        return <Menu key={menu.url} menu={menu} selectMenu={selectMenu} />;
    });
});

const Menu = observer(({ menu, selectMenu }) => {
    const { name, url, isActive } = menu;
    console.log('Footer Menu', isActive, url);
    return (
        <LinkContainer to={url}>
            <Nav.Link eventKey={url} active={isActive} onSelect={selectMenu}>
                {name}
            </Nav.Link>
        </LinkContainer>
    );
});

export default withRouter(Footer);
