import 'isomorphic-fetch';
import { Component } from 'react';
import Modal from 'react-responsive-modal';
import Head from 'next/head';

import Header from '../../../components/linkit/Header';
import Content from '../../../components/linkit/new/Content';
import '../../../styles/linkit.scss';

export default class extends Component
{
    state =
    {
        error: '',
        success: ''
    };
    
    static async getInitialProps({ query })
    {
        const { loggedIn } = query;
        return { loggedIn };
    }

    alert(error)
    {
        this.setState({ error });
    }

    triumph(success)
    {
        this.setState({ success });
    }

    render()
    {
        const { error, success } = this.state;
        const { loggedIn } = this.props;
        return (
            <div>
                <Head>
                    <title>LinkIt - New Post</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel='icon' href='https://vectr.com/geev/c7QLGrw2w.png?width=640&height=640&select=c7QLGrw2wpage0' />
                </Head>
                <Header loggedIn={ loggedIn } />
                <Content alert={ (type, message) => type === 'success' ? this.triumph(message) : this.alert(message) } loggedIn={ loggedIn } /> 
                <Modal open={ !!error } onClose={ () => this.setState({ error: '' }) } center>
                    <h1 className='linkit-error-title'>Error</h1>
                    <p className='linkit-error-message'>{ error }</p>
                </Modal>
                <Modal open={ !!success } onClose={ () => this.setState({ success: '' }) } center>
                    <h1 className='linkit-success-title'>Success</h1>
                    <p className='linkit-success-message'>{ success }</p>
                </Modal>
            </div>
        )
    }
};