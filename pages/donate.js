import 'isomorphic-fetch';
import Head from 'next/head';
import StripeCheckout from 'react-stripe-checkout';

import post from '../lib/post';
import '../styles/index.scss';

const api = 'https://api.gerardvee.com/';

const onToken = async ({ id }, amount) =>
{
    const res = await fetch(api + 'charge', post({ token: id, amount }));
    const data = await res.json();
    alert(`Thank you for the $${ data.amount / 100 }!`);
    window.location.href += '?done=true';
};

export default class Pay extends React.Component
{
    state = { payment: 0, errored: false };

    static async getInitialProps({ query })
    {
        const { done } = query;
        return { done };
    }

    componentDidCatch(error, info)
    {
        console.log(error);
        console.log(info);
    }

    render()
    {
        const { payment } = this.state;
        const { done } = this.props;
        return (
            <div className='col'>
                <Head>
                    <title>Donate</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <div>
                    { done && <h1>Thank you for your donation!</h1> }
                    Donation amount (USD): <input value={ payment } onChange={ ({ target }) => this.setState({ payment: target.value }) }/>
                    <StripeCheckout
                        name='gerardvee.com'
                        image='// gv logo'
                        amount={ payment * 100 } // in cents
                        token={ (tkn) => onToken(tkn, payment * 100) } stripeKey='pk_test_fwQdo6ZSLVSW9YIhSGndRtkZ'>
                        <button>Donate</button>
                    </StripeCheckout>
                </div>
            </div>
        );
    }
}