import 'isomorphic-fetch';
import { Component } from 'react';
import Modal from 'react-responsive-modal';
import Head from 'next/head';
import validUrl from 'valid-url';

import Nav from '../../../components/linkit/Nav';
import postType from '../../../lib/post';
import '../../../styles/linkit.scss';

const api = 'https://api.gerardvee.com/';

export default class extends Component
{
    state = { link: '', title: '', error: '', success: '' };

    alert(error)
    {
        this.setState({ error });
    }

    triumph(success)
    {
        this.setState({ success });
    }

    async newPost()
    {
        const { alert } = this;
        const date = new Date();
        const { link, title } = this.state;
        if (title.length > 50 && title.length < 4)
        {
            alert('title length must shorter than 50 and longer than 4 characters');
            return;
        }
        if (!validUrl.isUri(link))
        {
            alert('only proper links allowed');
            return;
        }
        const resp = await fetch(api + 'linkit/isDangerous/' + encodeURI(link));
        const isMalicious = await resp.json();
        if (isMalicious)
        {
            alert('this link is malicious!');
            return;
        }
        const post = { link, title, date, dead: false };
        const res = await fetch(api + 'linkit/post', postType({ post }));
        const result = await res.json();
        if (result)
        {
            triumph('sucessful post!');
        }
        else
        {
            alert('post failed');
        }
    }

    render()
    {
        const { title, link, error, success } = this.state;
        return (
            <div className='linkit-new'>
                <Head>
                    <title>LinkIt</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <Nav>
                    <a className='normal-link' href='/projects/linkit'>Home</a>
                </Nav>
                <div className='linkit-post-form'>
                    <div className='inputs'>
                        <input className='linkit-input' placeholder='Title' value={ title } onChange={ (e) => this.setState({ title: e.target.value }) }/>
                        <input className='linkit-input' placeholder='Url' value={ link } onChange={ (e) => this.setState({ link: e.target.value }) } />
                    </div>
                    <div className='submission'>
                        <button className='linkit-button' onClick={ () => this.newPost() }>Submit</button>
                    </div>
                </div>
                <Modal open={ !!error } onClose={ () => this.setState({ error: '' }) } center>
                    <h1 className='linkit-error-title'>Error</h1>
                    <h3 className='linkit-error-message'>{ error }</h3>
                </Modal>
                <Modal open={ !!success } onClose={ () => this.setState({ success: '' }) } center>
                    <h1 className='linkit-success-title'>Success</h1>
                    <h3 className='linkit-success-message'>{ success }</h3>
                </Modal>
            </div>
        )
    }
};