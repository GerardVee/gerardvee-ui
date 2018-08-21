import { Component } from 'react';

import Page from '../components/site/Page';

import '../styles/pricing.scss';

export default class extends Component
{
    render()
    {
        return (
            <Page title='Pricing'>
                <div className='row halign'>
                    <h1 className='site-pricing-header-title'>Pricing</h1>
                </div>
            </Page>
        );
    }
}