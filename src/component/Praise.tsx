import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import React from 'react';

const Praise = observer(({ praise }) => {
    const { no, title } = praise;

    return (
        <ListGroupItem key={no} tag={RRNavLink} exact to={`/${no}`}>
            <Badge color="success" pill>
                {no} 장
            </Badge>
            <span>&nbsp;{title}</span>
        </ListGroupItem>
    );
});

export default Praise;
