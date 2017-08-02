const {join, resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {

    const appCSS = new ExtractTextPlugin('[name]');

    return {
        entry: {
            'splash-screen': resolve(__dirname, 'src', 'index.ts'),
            'splash-screen-tailing': resolve(__dirname, 'src', 'tailing', 'index.ts'),
            'splash-screen-audio-wave': resolve(__dirname, 'src', 'audio-wave', 'index.ts'),
            'splash-screen-windcatcher': resolve(__dirname, 'src', 'windcatcher', 'index.ts'),
            'splash-screen-spinner-section': resolve(__dirname, 'src', 'spinner-section', 'index.ts'),
            'splash-screen-spinner-section-far': resolve(__dirname, 'src', 'spinner-section-far', 'index.ts'),
            'splash-screen-circular': resolve(__dirname, 'src', 'circular', 'index.ts'),

            'splash-screen.min.css': resolve(__dirname, 'src', 'index.less'),
            'splash-screen-tailing.min.css': resolve(__dirname, 'src', 'tailing', 'style.less'),
            'splash-screen-audio-wave.min.css': resolve(__dirname, 'src', 'audio-wave', 'style.less'),
            'splash-screen-windcatcher.min.css': resolve(__dirname, 'src', 'windcatcher', 'style.less'),
            'splash-screen-spinner-section.min.css': resolve(__dirname, 'src', 'spinner-section', 'style.less'),
            'splash-screen-spinner-section-far.min.css': resolve(__dirname, 'src', 'spinner-section-far', 'style.less'),
            'splash-screen-circular.min.css': resolve(__dirname, 'src', 'circular', 'style.less')
        },
        output: {
            path: join(__dirname, 'dist'),
            filename: '[name].min.js',
            libraryTarget: 'umd',
            library: {
                root: '[name]'
            },
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: appCSS.extract([{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, 'less-loader'])
                },
                {
                    test: /\.ts$/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            configFileName: 'tsconfig.prod.json'
                        }
                    }],
                    exclude: /(node_modules)/
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
        plugins: [
            appCSS,
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.ModuleConcatenationPlugin()
        ]
    }
};
