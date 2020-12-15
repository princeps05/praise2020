import { observer } from 'mobx-react';
import { Alert, Badge, Button, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { isEmpty } from 'lodash';

const SavedDateList = observer(({ savedDateList }) => {
    console.log('SavedDateList', savedDateList);

    if (isEmpty(savedDateList)) {
        return (
            <Alert variant="success">
                저장한 찬양이 없습니다.
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => window.history.back()} variant="outline-danger">
                        뒤로 가기
                    </Button>
                </div>
            </Alert>
        );
    }

    return savedDateList.map((item) => {
        const { formatedDate, date } = item;

        return (
            <LinkContainer key={date} exact to={`/history/${date}`}>
                <ListGroupItem>
                    <Badge variant="info">{formatedDate}</Badge>
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
                </ListGroupItem>
            </LinkContainer>
        );
    });
});

export default SavedDateList;
