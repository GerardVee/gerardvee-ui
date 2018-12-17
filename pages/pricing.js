import '../styles/pricing.scss';
import APIs from '../components/pricing/APIs';
import Apps from '../components/pricing/Apps';
import MobileNav from '../components/pricing/MobileNav';
import Page from '../components/Page';
import React from 'react';
import Websites from '../components/pricing/Websites';

export default () => (
    <Page title='Pricing'>
        <MobileNav />
        <Websites />
        <APIs />
        <Apps />
    </Page>
);