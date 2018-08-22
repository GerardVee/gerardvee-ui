import { Component } from 'react';

import Page from '../components/site/Page';
import MobileNav from '../components/site/pricing/MobileNav';
import Websites from '../components/site/pricing/Websites';
import APIs from '../components/site/pricing/APIs';
import Apps from '../components/site/pricing/Apps';

import '../styles/pricing.scss';

export default class extends Component
{
    render()
    {
        return (
            <Page title='Pricing'>
                <MobileNav />
                <Websites />
                <APIs />
                <Apps />
            </Page>
        );
    }
}