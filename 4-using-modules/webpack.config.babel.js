// node module imports
import path from 'path';
import webpack from 'webpack';

// config setup
const config = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin() // minify JavaScript
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        noInfo: true,
        overlay: true,
        open: true
    },
};

export default config;
