import { Component } from 'react';

import Page from '../components/Page';
import AboutPreface from '../components/about/AboutPreface';
import More from '../components/about/More';
import Location from '../components/about/Location';

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