import 'isomorphic-fetch';
import { Component } from 'react';
import Link from 'next/link';

import Header from '../components/site/Header';
import Skills from '../components/site/Skills';
import Projects from '../components/site/Projects';
import Contact from '../components/site/Contact';
import '../styles/index.scss';

const api = 'https://api.gerardvee.com/';

const Footer = () => (
    <div>
        <h3>Keep in touch</h3>
        <div className='row'>
            <button>Github</button>
            <button>LinkedIn</button>
            <button>CodePen</button>
        </div>
        <p>Crafted by me ©, 2017 </p>
    </div>
);

const Index = ({ content, images }) => (
    <div className='col' style={{ padding: 0 }}>
        <title>{ content.filter(item => item.type === 'header')[0].title }</title>
        <Header content={ content } />
        <Skills content={ content } />
        <Projects content={ content } images={ images } />
        <Contact />
        <Footer />
    </div>
);

Index.getInitialProps = async ({ req }) =>
{
    const contentReq = await fetch(api + 'site/content');
    const imagesReq = await fetch(api + 'site/images');
    const content = await contentReq.json();
    const images = await imagesReq.json();
    return { content, images };
};

export default Index;