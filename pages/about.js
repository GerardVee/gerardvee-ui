import '../styles/about.scss';
import AboutPreface from '../components/about/AboutPreface';
import Location from '../components/about/Location';
import More from '../components/about/More';
import Page from '../components/Page';
import React from 'react';

export default () => (
    <Page title='About'>
        <AboutPreface />
        <More />
        <Location />
    </Page>
);
