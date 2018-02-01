// node module imports
import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// webpack plugin imports
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    autoprefixer('last 3 versions', '>1%'),
                                    cssnano()
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            // leaflet bug fix
            'leaflet.css': path.resolve(__dirname, 'node_modules/leaflet/dist/leaflet.css'),
            './images/layers.png$': path.resolve(__dirname, 'node_modules/leaflet/dist/images/layers.png'),
            './images/layers-2x.png$': path.resolve(__dirname, 'node_modules/leaflet/dist/images/layers-2x.png'),
            './images/marker-icon.png$': path.resolve(__dirname, 'node_modules/leaflet/dist/images/marker-icon.png'),
            './images/marker-icon-2x.png$': path.resolve(__dirname, 'node_modules/leaflet/dist/images/marker-icon-2x.png'),
            './images/marker-shadow.png$': path.resolve(__dirname, 'node_modules/leaflet/dist/images/marker-shadow.png')
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/*.html', to: '[name].[ext]'}, // copy HTML files
            {from: 'src/data/*', to: 'data/[name].[ext]'} // copy data directory
        ]),
        new ExtractTextPlugin('styles.min.css'), // bundle, autoprefix, and minify CSS
        new webpack.optimize.UglifyJsPlugin(), // minify JavaScript
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        noInfo: true,
        overlay: true,
        open: true
    },
};

export default config;
