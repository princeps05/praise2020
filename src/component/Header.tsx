import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Badge } from 'react-bootstrap';
import MainStore from '../store/MainStore';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class Header extends Component<MainStoreProps> {
    componentDidMount() {
        this.props.mainStore?.checkIsTodaySavedPraise();
    }
    componentDidUpdate() {
        this.props.mainStore?.checkIsTodaySavedPraise();
    }

    render() {
        console.log('Header render', this.props);

        return (
            <header className="sticky-top">
                <span
                    className="backBtn"
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </span>
                <Title praise={this.props.mainStore?.selectedPraise} />
                <span
                    className="history"
                    onClick={() => {
                        this.props.mainStore?.savePraise();
                    }}
                >
                    {this.props.mainStore?.isTodaySavedPraise ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                fillRule="evenodd"
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            />
                        </svg>
                    )}
                </span>
            </header>
        );
    }
}

const Title = observer(({ praise }) => {
    console.log('Header Title', praise.no);

    if (!praise) {
        return <h6>찬양</h6>;
    }

    return (
        <div>
            <h6>
                <Badge variant="success" pill>
                    {praise.no} 장
                </Badge>
                {praise.title.length > 20 ? praise.title.substring(0, 20) + '...' : praise.title}
            </h6>
        </div>
    );
});

export default Header;
