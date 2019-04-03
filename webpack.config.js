var path = require('path');
var webpackHtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new webpackHtmlPlugin({
            filename: path.resolve(__dirname, 'build/index.html'),
            template: 'index.html'
        })
    ]
};