/*
    need:
    * fix up the entire new user dilema (i'd love to use async on the auth method) // fixed it seems
    * better document and enforce linting
 */
import 'isomorphic-fetch';
import { Component } from 'react';
import FacebookAuth from 'react-facebook-auth';
import Modal from 'react-responsive-modal';
import Link from 'next/link';
import Head from 'next/head';

import Nav from '../../../components/linkit/Nav';
import Post from '../../../components/linkit/Post';
import post from '../../../lib/post';
import '../../../styles/linkit.scss';

const api = 'https://api.gerardvee.com/';

const FacebookLogin = ({ onClick }) =>
(
    <a className='normal-link head-link' onClick={ onClick }>Login with Facebook</a>
);

const FacebookAuthenticate = ({ callback, auto }) =>
(
    <FacebookAuth autoLoad={ auto } appId='176820699610596' callback={ callback } component={ FacebookLogin } />
);

export default class extends Component
{
    state = { user: null, me: null, error: '' };

    static async getInitialProps({ req, query })
    {
        const { loggedIn } = query;
        const res = await fetch(api + 'linkit/posts');
        const posts = await res.json();
        return { posts, loggedIn };
    }
    
    auth(user)
    {
        this.setState({ user });
        if (!user.id)
        {
            return;
        }
        fetch(api + 'linkit/user/new', post({ id: user.id })).then(res => res.json()).then(_ =>
        {
            fetch(api + 'linkit/me', post({ token: user.accessToken })).then(res => res.json()).then(me =>
            {
                this.setState({ me });
            });
        });
    }

    setError(error)
    {
        this.setState({ error });
    }

    render()
    {
        const { posts, loggedIn } = this.props;
        const { user, me, error } = this.state;
        return (
            <div>
                <Head>
                    <title>LinkIt</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel='icon' href='https://vectr.com/geev/c7QLGrw2w.png?width=640&height=640&select=c7QLGrw2wpage0' />
                </Head>
                <div className='linkit-home'>
                    <Nav picture={ user ? user.picture.data.url : '' }>
                        { !user && <FacebookAuthenticate auto={ !!loggedIn } callback={ (res) => this.auth(res) } /> }
                        <Link href={`./linkit/new?loggedIn=${ !!user }`}><a className='normal-link head-link'>Make a new post</a></Link>
                    </Nav>
                    {(posts || [] ).map((post) => 
                        <Post alert={ err => this.setError(err) } className='linkit-post' key={ post.id }
                            me={ me } token={ !!user ? user.accessToken : '' } { ...post } />
                    )}
                    <Modal open={ !!error } onClose={ () => this.setState({ error: '' }) } center>
                        <h1 className='linkit-error-title'>Error</h1>
                        <h3 className='linkit-error-message'>{ error }</h3>
                    </Modal>
                </div>
            </div>
        );
    }
}