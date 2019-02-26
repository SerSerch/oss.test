const path = require('path'),
    HTMLplugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    tinyPngWebpackPlugin = require('tinypng-webpack-plugin'),
    SpriteLoaderPlugin = require( 'svg-sprite-loader/plugin' );

module.exports = {
    entry:{
        main: path.resolve(__dirname, 'src', 'index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true,
                secure: false,
            }
        }
    },
    module: {
        rules :[
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: 'img/sprite-[hash:6].svg'
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false } },
                                { convertPathData: false }
                            ]
                        }
                    },
                    'svg-transform-loader',
                ]
            },
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            components: path.resolve(__dirname, 'src', 'Components'),
            containers: path.resolve(__dirname, 'src', 'Containers'),
            actions: path.resolve(__dirname, 'src', 'actions'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            efi: path.resolve(__dirname, 'src', 'efi'),
            layouts: path.resolve(__dirname, 'src', 'layouts'),
        }
    },
    plugins :[
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new tinyPngWebpackPlugin({
            key:"btm7DN0jvTPrxkd0jMGLvFpBG38NBbKy"
        }),
        new SpriteLoaderPlugin(),
    ],
};