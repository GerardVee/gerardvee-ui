import 'isomorphic-fetch';
import { Component } from 'react';
import Head from 'next/head';
import validUrl from 'valid-url';

import Nav from '../../../components/linkit/Nav';
import postType from '../../../lib/post';
import '../../../styles/linkit.scss';

const api = 'https://api.gerardvee.com/';

export default class extends Component
{
    state = { link: '', title: '' };

    async newPost()
    {
        const date = new Date();
        const { link, title } = this.state;
        if (title.length > 50 && title.length < 4)
        {
            alert('Title length must shorter than 50 and longer than 4 characters.');
            return;
        }
        if (validUrl(link))
        {
            alert('Only proper links allowed.');
            return;
        }
        const resp = await fetch(api + 'linkit/isDangerous/' + encodeURI(link));
        const isMalicious = await resp.json();
        if (isMalicious)
        {
            alert('This link is malicious!');
            return;
        }
        const post = { link, title, date, dead: false };
        const res = await fetch(api + 'linkit/post', postType({ post }));
        const result = await res.json();
        if (result)
        {
            alert('Sucessful post!');
        }
        else
        {
            alert('Post failed.');
        }
    }

    render()
    {
        const { title, link } = this.state;
        // link messes up the getInitalProps segment?
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
            </div>
        )
    }
};