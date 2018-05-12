import 'isomorphic-fetch';
import Head from 'next/head';
import StripeCheckout from 'react-stripe-checkout';

import post from '../lib/post';
import '../styles/index.scss';

const api = 'https://api.gerardvee.com/';

const onToken = async ({ id }, amount, href) =>
{
    const res = await fetch(api + 'charge', post({ token: id, amount }));
    const data = await res.json();
    console.log(data);
    alert(`Thank you, $${ data.amount / 100 } charged.`);
    window.location.href = decodeURIComponent(href) + `?token=${ data.id }`
};

export default class Pay extends React.Component
{
    state = { payment: 0 };

    static async getInitialProps({ query })
    {
        const { ref, amount } = query;
        return { href: ref, amount };
    }

// if something is 25, add 2.6% then add .3 onto it,
// due to the x - 2.6% - .3 net income rule 

    render()
    {
        const { payment } = this.state;
        const { href, amount } = this.props;
        return (
            <div className='col'>
                <Head>
                    <title>{ amount ? 'Pay' : 'Donate' } </title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                { amount && <StripeCheckout
                    name='gerardvee.com'
                    image='// gv logo'
                    amount={ amount * 100 } // in cents
                    token={ (tkn) => onToken(tkn, amount * 100, href) } stripeKey='pk_test_fwQdo6ZSLVSW9YIhSGndRtkZ'>
                    <button>Pay ${ amount }</button>
                </StripeCheckout>
                }
                { !amount &&
                    <div>
                        Donation amount (USD): <input value={ payment } onChange={ ({ target }) => this.setState({ payment: target.value }) }/>
                        <StripeCheckout
                            name='gerardvee.com'
                            image='// gv logo'
                            amount={ payment * 100 } // in cents
                            token={ (tkn) => onToken(tkn, payment * 100, href) } stripeKey='pk_test_fwQdo6ZSLVSW9YIhSGndRtkZ'>
                            <button>Donate</button>
                        </StripeCheckout>
                    </div>
                }
                <a href={ decodeURIComponent(href) }>back</a>
            </div>
        );
    }
}