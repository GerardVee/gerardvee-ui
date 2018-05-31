import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../ducks/store';

class MyApp extends App
{
    static async getInitialProps({ Component, ctx })
    {
        // can dispatch from here too, just ctx.store.dispatch
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }
    render()
    {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={ store }>
                    <Component { ...pageProps } />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);