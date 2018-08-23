import { Component } from 'react';

import Page from '../components/site/Page';
import DonationPreface from '../components/site/donate/DonationPreface';
import ThankYou from '../components/site/donate/ThankYou';
import Amount from '../components/site/donate/Amount';
import StripeDonate from '../components/site/donate/StripeDonate';

import '../styles/donate.scss';

export default class extends Component
{
    state =
    {
        payment: '0',
        donated: false,
    };

    render()
    {
        const { payment, donated } = this.state;
        return (
            <Page title='Donate'>
                { donated && <ThankYou /> }
                { (!donated) && <>
                    <DonationPreface />
                    <Amount payment={ payment } paymentUpdate={ (payment) => this.setState({ payment: payment.match(/[0-9.]*/gi, '')[0] || '' }) }
                        formatWell={ () => this.setState({ payment: payment.match(/[0-9]*\.?[0-9]*/gi, '')[0] || '' }) } />
                    <StripeDonate payment={ payment } setDonated={ () => this.setState({ donated: true }) }  />
                </>}
            </Page>
        );
    }
}