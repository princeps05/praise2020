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
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                        />
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                            <path
                                fillRule="evenodd"
                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                            />
                            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                            <path
                                fillRule="evenodd"
                                d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
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
