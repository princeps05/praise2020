import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MainStore from '../store/MainStore';
import { inject, observer } from 'mobx-react';
import { LinkContainer } from 'react-router-bootstrap';

interface MainStoreProps extends RouteComponentProps<any> {
    mainStore?: MainStore;
}

@inject('mainStore')
@observer
class Footer extends Component<MainStoreProps> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Footer ');

        return (
            <footer>
                <Nav justify variant="tabs" onSelect={this.props.mainStore?.selectMenu}>
                    <MenuList menuList={this.props.mainStore?.menuList} />
                </Nav>
            </footer>
        );
    }
}

const MenuList = observer(({ menuList }) => {
    console.log('Footer MenuList', menuList);
    return (
        <>
            <Catalog />
            <Search />
            <Home />
            <History />
            <Info />
        </>
    );
});

const Catalog = observer(() => {
    console.log('Catalog');
    return (
        <Nav.Item>
            <LinkContainer exact to={'/catalog'}>
                <Nav.Link eventKey={'/catalog'}>
                    <svg style={{ marginTop: '-4px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-list-stars" viewBox="0 0 16 16">
                        <path
                            fillRule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                        />
                        <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z" />
                    </svg>
                    목차
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
});

const Search = observer(() => {
    console.log('Search');
    return (
        <Nav.Item>
            <LinkContainer exact to={'/search'}>
                <Nav.Link eventKey={'/search'}>
                    <svg style={{ marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                    검색
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
});

const Home = observer(() => {
    console.log('Home');
    return (
        <Nav.Item>
            <LinkContainer exact to={'/'}>
                <Nav.Link eventKey={'/'}>
                    <svg style={{ marginTop: '-4px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" />
                        <path
                            fillRule="evenodd"
                            d="M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3z"
                        />
                    </svg>
                    악보
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
});

const History = observer(() => {
    console.log('History');
    return (
        <Nav.Item>
            <LinkContainer exact to={'/history'}>
                <Nav.Link eventKey={'/history'}>
                    <svg style={{ marginTop: '-4px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                        <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                        <path
                            fillRule="evenodd"
                            d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                    내역
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
});

const Info = observer(() => {
    console.log('Info');
    return (
        <Nav.Item>
            <LinkContainer exact to={'/info'}>
                <Nav.Link eventKey={'/info'}>
                    <svg style={{ marginTop: '-4px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                        <circle cx="8" cy="4.5" r="1" />
                    </svg>
                    정보
                </Nav.Link>
            </LinkContainer>
        </Nav.Item>
    );
});

export default withRouter(Footer);
