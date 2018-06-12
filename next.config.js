require('dotenv').config();
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    webpack: (config) =>
    {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.HOST': JSON.stringify(process.env.HOST),
                'process.env.FB_APP_ID': JSON.stringify(process.env.FB_APP_ID)
            })
            
        );
        config.plugins.push(
            new ExtractTextPlugin({
                filename: (getPath) =>
                    `static/${ getPath('[name].css')
                        .replace('bundles/pages/', '')
                        .replace('.js.css', '.css') }`
            })
        );
        return config;
    }
};

module.exports = withSass(web);