import { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import post from '../../lib/post';

const api = process.env.API;
const stripeKey = process.env.STRIPE_KEY;

export default class extends Component
{
    async onToken({ id }, amount)
    {
        if (amount < 100)
        {
            alert('I only accept donations greater than $1 due to fees.');
            return;
        }
        const res = await fetch(api + 'charge', post({ token: id, amount }));
        const data = await res.json();
        if (data.status !== 'succeeded')
        {
            alert('Your transaction unfortunately failed.');
            return;
        }
        alert(`Thank you for the $${ data.amount / 100 }!`);
        this.props.setDonated();
    }

    render()
    {
        const { payment } = this.props;
        return (
            <div className='row halign'>
                <StripeCheckout
                    name='gerardvee.com'
                    image='https://s8.postimg.cc/7o0muurfn/20180329_131223.jpg'
                    amount={ parseFloat(payment) * 100 } // in cents
                    token={ (tkn) => this.onToken(tkn, parseFloat(payment) * 100) } stripeKey={ stripeKey }>
                    <button className='site-donate-donate-button'>Donate</button>
                </StripeCheckout>
            </div>
        );
    }
}