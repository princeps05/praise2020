import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const PraiseRangeList = observer(({ praiseRangeList }) => {
    console.log('PraiseRangeList');

    return praiseRangeList.map(({ start, end }) => {
        return (
            <ListGroupItem key={start} action>
                <LinkContainer exact to={`/catalog/${start}`}>
                    <div>
                        <Badge variant="success">{start} 장</Badge> ~ <Badge variant="success">{end} 장</Badge>
                    </div>
                </LinkContainer>
            </ListGroupItem>
        );
    });
});

export default PraiseRangeList;
