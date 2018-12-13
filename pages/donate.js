import { Component } from 'react';

import Page from '../components/Page';
import DonationPreface from '../components/donate/DonationPreface';
import ThankYou from '../components/donate/ThankYou';
import Amount from '../components/donate/Amount';
import StripeDonate from '../components/donate/StripeDonate';

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