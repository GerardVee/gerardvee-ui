import Head from 'next/head';

import Header from '../../../components/wikiviewer/Header';
import WikiSearch from '../../../components/wikiviewer/WikiSearch';

import '../../../styles/wikiviewer.scss';

export default () => (
    <div>
        <Head>
            <title>WikiViewer</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='icon' href='https://api.gerardvee.com/public/images/1535087189657.png' />
        </Head>
        <Header />
        <WikiSearch />
    </div>
);