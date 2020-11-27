import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import React from 'react';

const PraiseRangeList = observer(({ praiseRangeList }) => {
    console.log('PraiseRangeList');

    return praiseRangeList.map(({ start, end }) => {
        return (
            <ListGroupItem key={start} tag={RRNavLink} exact to={`/catalog/${start}`} action>
                <Badge color="success">{start}</Badge> ~ <Badge color="success">{end}</Badge>
            </ListGroupItem>
        );
    });
});

export default PraiseRangeList;
