import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Badge } from 'reactstrap';
import MainStore from '../store/MainStore';

interface MainStoreProps {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class Header extends Component<MainStoreProps> {
    render() {
        console.log('Header render');

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
                <span className="history">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
                        />
                    </svg>
                </span>
            </header>
        );
    }
}

const Title = observer(({ praise }) => {
    console.log('Header Title', praise.no);
    return (
        <h5>
            <Badge color="success" pill>
                {praise.no}장
            </Badge>
            <Badge color="primary" pill>
                {praise.title.length > 20 ? praise.title.substring(0, 20) + '...' : praise.title}
            </Badge>
        </h5>
    );
});

export default Header;
