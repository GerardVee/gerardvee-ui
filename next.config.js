require('dotenv').config();
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass({
    webpack: (config, options) =>
    {
        const { isServer, dev } = options;
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.HOST': JSON.stringify(process.env.HOST),
                'process.env.FB_APP_ID': JSON.stringify(process.env.FB_APP_ID),
                'process.env.FB_SUPERUSERS': JSON.stringify(process.env.FB_SUPERUSERS),
                'process.env.STRIPE_KEY': JSON.stringify(process.env.STRIPE_KEY)
            })
        );
        return config;
    }
});