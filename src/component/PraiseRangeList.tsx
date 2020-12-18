import { observer } from 'mobx-react';
import { Badge, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const PraiseRangeList = ({ praiseRangeList }) => {
    console.log('PraiseRangeList');

    return praiseRangeList.map(({ start, end }) => {
        return (
            <ListGroupItem key={start} action>
                <LinkContainer exact to={`/catalog/${start}`}>
                    <div>
                        <Badge variant="success">{start} 장</Badge> ~ <Badge variant="success">{end} 장</Badge>
                        <svg
                            style={{ marginTop: '3px', float: 'right' }}
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-chevron-right"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </LinkContainer>
            </ListGroupItem>
        );
    });
};

export default observer(PraiseRangeList);
