import 'isomorphic-fetch';
import { Component } from 'react';

import Page from '../components/site/Page';

import '../styles/contact.scss';

export default class extends Component
{
    render()
    {
        return (
            <Page title='About'>
                <div className='col'>
                    <div className='row halign'>
                        <h1>Pricing</h1>
                    </div>
                    <div className='row halign'>
                        
                    </div>
                </div>
            </Page>
        );
    }
}