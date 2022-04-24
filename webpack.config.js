const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                      
                    }
                  }]
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],

        alias: {
            '@images': path.resolve(__dirname, 'src/images')
        }
    },

    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },

        open: true,
        port: 5001,
        hot: true,
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),

        new HtmlWebpackPlugin({
            title: 'product',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            clean: true
        })
    ]
}
