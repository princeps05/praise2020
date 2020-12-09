import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const SavedDateList = observer(({ savedDateList }) => {
    console.log('SavedDateList');

    return savedDateList.map((date) => {
        return (
            <ListGroupItem key={date}>
                <LinkContainer exact to={`/history/${date}`}>
                    <Badge color="success">{date}</Badge>
                </LinkContainer>
            </ListGroupItem>
        );
    });
});

export default SavedDateList;
