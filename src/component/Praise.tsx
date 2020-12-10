import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const Praise = observer(({ praise }) => {
    const { no, title } = praise;

    return (
        <ListGroupItem key={no}>
            <LinkContainer exact to={`/${no}`}>
                <div>
                    <Badge variant="success" pill>
                        {no} 장
                    </Badge>
                    <span>&nbsp;{title}</span>
                </div>
            </LinkContainer>
        </ListGroupItem>
    );
});

export default Praise;
