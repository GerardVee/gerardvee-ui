require('dotenv').config();
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');
const webpack = require('webpack');

/*if (process.env.NODE_ENV != 'production')
{
    require('dotenv').config();
}

/*
 * @ https://github.com/zeit/next.js/issues/159
 * adding to webpack exposes it the browser/client
 * keep only things supposed to be known below
 * !! whatever is included in webpack is included in the server
 */


module.exports = withCSS(withSass({
    webpack: (config, options) =>
    {
        const { isServer, dev } = options;
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.HOST': JSON.stringify(process.env.HOST),
                'process.env.FB_APP_ID': JSON.stringify(process.env.FB_APP_ID),
                'process.env.FB_SUPERUSERS': JSON.stringify(process.env.FB_SUPERUSERS)
            })
        );
        if (!isServer)
        {
            config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
        }
        return config;
    }
}));
