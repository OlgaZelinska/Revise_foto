const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: [
        "./src/index.js",
        "./src/style/App.css"
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
                  
            },
            {
                test: /\.(ttf|woff|svg|eot|png|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 8080
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'style.min.css'
    })]
}