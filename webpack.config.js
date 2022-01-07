const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    // source map to know exact line in debug
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // devserver to keep webpack running and receiving new diffs
    devServer: {
        static : {
            directory : path.join(__dirname, 'public')
        },
        hot: true
    },
    // ReactRefreshWebpackPlugin to not reset state of components after editing code
    // HtmlWebpackPlugin to inject bundle.js in index.html
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    } 
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    }
};