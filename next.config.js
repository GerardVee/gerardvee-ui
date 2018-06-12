require('dotenv').config();
const MergeFilesPlugin = require('merge-files-webpack-plugin');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

/*if (process.env.NODE_ENV != 'production')
{
    require('dotenv').config();
}*/

/*
 * @ https://github.com/zeit/next.js/issues/159
 * adding to webpack exposes it the browser/client
 * keep only things supposed to be known below
 * !! whatever is included in webpack is included in the server
 */

const web =
{
    webpack: (config, options) =>
    {
        const { isServer } = options;
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.HOST': JSON.stringify(process.env.HOST),
                'process.env.FB_APP_ID': JSON.stringify(process.env.FB_APP_ID)
            })
            
        );
        if (!isServer)
        {
            options.extractCSSPlugin.filename = 'static/[name].css';
            config.plugins.push(
                new MergeFilesPlugin({
                    filename: 'static/style.css',
                    test: /\.css/,
                    deleteSourceFiles: true,
                })
            );
        }
        return config;
    }
};

module.exports = withSass(web);