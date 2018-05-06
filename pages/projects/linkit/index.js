/*
 * /linkit vs /linkit/ is very different, the latter messes up and causes SSR to mess up
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
    <a className='normal-link' onClick={ onClick }>Login with Facebook</a>
);

const FacebookAuthenticate = ({ callback }) =>
(
    <FacebookAuth appId='176820699610596' callback={ callback } component={ FacebookLogin } />
);

export default class extends Component
{

    state = { user: null, me: null, error: '' };

    static async getInitialProps({ req })
    {
        const res = await fetch(api + 'linkit/posts');
        const posts = await res.json();
        return { posts };
    }
    
    auth(user)
    {
        this.setState({ user });
        fetch(api + 'linkit/me', post({ token: user.accessToken })).then(res => res.json()).then(me =>
        {
            this.setState({ me });
        });
    }

    setError(error)
    {
        this.setState({ error });
    }

    render()
    {
        const { posts } = this.props;
        const { user, meo, error } = this.state;
        return (
            <div>
                <Head>
                    <title>LinkIt</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <div className='linkit-home'>
                    <Nav picture={ user ? user.picture.data.url : '' }>
                        { !user && <FacebookAuthenticate callback={ (res) => this.auth(res) } /> }
                        <Link href='./linkit/new'><a className='normal-link'>Make a new post</a></Link>
                    </Nav>
                    {(posts || [] ).map((post) => 
                        <Post alert={ err => this.setError(err) } className='linkit-post' key={ post.id }
                            me={ me } token={ !!user ? user.accessToken : '' } { ...post } />
                    )}
                    <Modal open={ !!error } onClose={ () => this.setState({ error: '' }) } center>
                        <h2>Error</h2>
                        <p>{ error }</p>
                    </Modal>
                </div>
            </div>
        );
    }
}