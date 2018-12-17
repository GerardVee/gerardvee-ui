import '../styles/index.scss';
import Footer from './Footer';
import Head from 'next/head';
import Nav from './Nav';
import React from 'react';

export default ({ children, title }) => (
    <>
        <Head>
            <title>{ title }</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content='GerardVee portfolio site' />
            <meta property='og:title' content={ title } />
            <meta property='og:description' content='GerardVee portfolio site' />
            <meta property='og:image' content='https://s8.postimg.cc/7o0muurfn/20180329_131223.jpg' />
            <link rel='icon' href='https://s3.amazonaws.com/gerardvee/site/1534371055736.png' />
        </Head>
        <div className='col padding-0'>
            <Nav />
            { children }
            <Footer />
        </div>
    </>
);