const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/pages/index.js",
    },
    output: {
        filename: "dist.js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: 'images/[name].[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name].[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ]
}
