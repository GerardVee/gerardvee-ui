import Head from 'next/head';

import Nav from './Nav';
import Footer from './Footer';

import '../../styles/index.scss';

export default ({ children, title }) => (
    <>
        <Head>
            <title>{ title }</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='icon' href='https://api.gerardvee.com/public/images/1534371055736.png' />
        </Head>
        <div className='col padding-0'>
            <Nav />
            { children }
            <Footer />
        </div>
    </>
);