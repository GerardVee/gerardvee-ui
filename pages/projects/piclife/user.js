import { Component } from 'react';

import Page from '../../../components/piclife/Page';

export default class extends Component
{
    // i think it's this.props.url.query.id
    static async getInitialProps({ query })
    {
        const { id } = query;
        // use api to get necessary data
        return { id };
    }

    render()
    {
        const { id } = this.props;
        return (
            <Page>
                profile stuffs for { id }
            </Page>
        );
    }
};