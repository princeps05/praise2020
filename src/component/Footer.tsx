import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
    return (
        <Nav tabs={true} justified={true}>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/catalog">
                    목차
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/search">
                    검색
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/">
                    악보
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/history">
                    내역
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/info">
                    정보
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default Footer;
