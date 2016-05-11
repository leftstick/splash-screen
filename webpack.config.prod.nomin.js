var path = require('path');

module.exports = {
    entry: {
        index: './src/splash.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'splash.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /(node_modules)/
            }
        ]
    },
    ts: {
        compilerOptions: {
            target: 'es5',
            module: 'commonjs',
            noImplicitAny: false,
            removeComments: false,
            noLib: false,
            declaration: true,
            outDir: './'
        }
    },
    resolve: {
        root: [
            path.resolve(__dirname)
        ],
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    }
};
