import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import React from 'react';

const SavedDateList = observer(({ savedDateList }) => {
    console.log('SavedDateList');

    return savedDateList.map((date) => {
        return (
            <ListGroupItem key={date} tag={RRNavLink} exact to={`/history/${date}`} action>
                <Badge color="success">{date}</Badge>
            </ListGroupItem>
        );
    });
});

export default SavedDateList;
