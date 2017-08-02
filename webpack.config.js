const {join, resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env = {}) {

    const isDemo = !!env.isDemo;

    const vendorCSS = new ExtractTextPlugin(`[name]-[contenthash]-vendor.css`);
    const appCSS = new ExtractTextPlugin(`[name]-[contenthash]-app.css`);


    return {
        entry: {
            index: resolve(__dirname, 'demo', 'ts', 'index.ts')
        },
        output: {
            path: join(__dirname, 'out'),
            filename: `${isDemo ? '[hash].' : ''}[name].bundle.js`,
            chunkFilename: `${isDemo ? '[hash].' : ''}[id].bundle.js`,
            publicPath: isDemo ? '/splash-screen/' : '/'
        },
        devtool: `${isDemo ? '' : 'source-map'}`,
        devServer: {
            contentBase: './out',
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: vendorCSS.extract([{
                        loader: 'css-loader',
                        options: {
                            minimize: isDemo
                        }
                    }])
                },
                {
                    test: /\.less$/,
                    use: appCSS.extract([
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isDemo
                            }
                        },
                        'less-loader'
                    ])
                },
                {
                    test: /\.ts$/,
                    use: ['ts-loader'],
                    exclude: /(node_modules)/
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            modules: [
                resolve(__dirname),
                resolve(__dirname, 'node_modules')
            ],
            extensions: [
                '.js',
                '.ts'
            ]
        },
        plugins: (isDemo ? [new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })] : []).concat([
            vendorCSS,
            appCSS,
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                inject: 'body',
                template: resolve(__dirname, 'demo', 'index.html'),
                favicon: resolve(__dirname, 'demo', 'img', 'favicon.png'),
                hash: false
            })
        ])
    }
};
