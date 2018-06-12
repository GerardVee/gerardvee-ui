import 'isomorphic-fetch';
import { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import Head from 'next/head';

import Header from '../../../components/linkit/Header';
import Content from '../../../components/linkit/Content';
import MobileFooter from '../../../components/linkit/MobileFooter';
import { sendPosts, sendLoggedIn, clearError } from '../../../ducks/actions/linkit';

import '../../../styles/linkit.scss';

const api = 'https://api.gerardvee.com/';

const mapStateToProps = ({ linkit }) => (
{
    error: linkit.error
});

const mapDispatchToProps = (dispatch) => (
{
    clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    static async getInitialProps({ store, req, query })
    {
        const { loggedIn } = query;
        const loginStatus = (loggedIn == null) ? false : loggedIn;
        const res = await fetch(api + 'linkit/posts');
        const posts = await res.json();
        store.dispatch(sendPosts(posts));
        store.dispatch(sendLoggedIn(loginStatus));
        return {};
    }

    clearError()
    {
        this.props.clearError();
    }

    render()
    {
        const { error } = this.props;
        return (
            <div>
                <Head>
                    <title>LinkIt</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel='icon' href='https://api.gerardvee.com/public/images/1528500158997.png' />
                </Head>
                <Header extra />
                <Content />
                <Modal open={ !!error } onClose={ () => this.clearError() } center>
                    <h1 className='linkit-error-title'>Error</h1>
                    <h3 className='linkit-error-message'>{ error }</h3>
                </Modal>
                <MobileFooter />
            </div>
        );
    }
});