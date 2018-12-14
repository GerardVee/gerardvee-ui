require('dotenv').config();
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = withSass({
    webpack: (config, options) =>
    {
        const { isServer, dev } = options;
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),                  
                'process.env.BASE_API': JSON.stringify(process.env.BASE_API),
                'process.env.API': JSON.stringify(process.env.API),
                'process.env.COGNITO_POOL_ID': JSON.stringify(process.env.COGNITO_POOL_ID),
                'process.env.FB_APP_ID': JSON.stringify(process.env.FB_APP_ID),
                'process.env.FB_SUPERUSERS': JSON.stringify(process.env.FB_SUPERUSERS),
                'process.env.STRIPE_KEY': JSON.stringify(process.env.STRIPE_KEY)
            })
        );
        return config;
    },
    optimization: process.env.NODE_ENV === 'development' ? {} : {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: true,
              ecma: 6,
              mangle: true
            },
            sourceMap: false
          })
        ]
      }
});