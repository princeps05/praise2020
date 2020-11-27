import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import React from 'react';

const PraiseList = observer(({ praiseList }) => {
    console.log('PraiseList');

    return praiseList.map(({ no, title }) => {
        return (
            <ListGroupItem key={no} tag={RRNavLink} exact to={`/${no}`} action>
                <Badge color="success" pill>
                    {no}
                </Badge>
                <span>&nbsp;{title}</span>
            </ListGroupItem>
        );
    });
});

export default PraiseList;
