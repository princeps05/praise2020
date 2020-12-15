import { observer } from 'mobx-react';
import { isEmpty } from 'lodash';
import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import SavedPraise from './SavedPraise';

const SavedPraiseList = observer(({ savedPraiseList, removePraise }) => {
    if (isEmpty(savedPraiseList)) {
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

    return savedPraiseList.map((praise) => {
        return <SavedPraise key={praise.no} praise={praise} removePraise={removePraise} />;
    });
});

export default SavedPraiseList;
