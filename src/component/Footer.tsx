import React, { Component } from 'react';
import { NavLink as RRNavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';

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
        this.props.mainStore?.selectMenu(this.props.location.pathname);
    }

    render() {
        console.log('Footer ');

        return (
            <footer className="fixed-bottom">
                <Nav tabs={true} justified={true}>
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
    console.log('Footer Menu', isActive);
    return (
        <NavItem active={isActive}>
            <NavLink tag={RRNavLink} exact to={url}>
                {name}
            </NavLink>
        </NavItem>
    );
});

export default withRouter(Footer);
