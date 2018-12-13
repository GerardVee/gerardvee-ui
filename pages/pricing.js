import { Component } from 'react';

import Page from '../components/Page';
import MobileNav from '../components/pricing/MobileNav';
import Websites from '../components/pricing/Websites';
import APIs from '../components/pricing/APIs';
import Apps from '../components/pricing/Apps';

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