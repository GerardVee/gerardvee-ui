import { Component } from 'react';

import Page from '../components/site/Page';
import AboutPreface from '../components/site/about/AboutPreface';
import More from '../components/site/about/More';
import Location from '../components/site/about/Location';

import '../styles/about.scss';

export default class extends Component
{
    render()
    {
        return (
            <Page title='About'>
                <AboutPreface />
                <More />
                <Location />
            </Page>
        );
    }
}