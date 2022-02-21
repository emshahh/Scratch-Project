const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
	mode : "development",
	// ROLE: entry point for webpack
    entry: path.resolve(__dirname, 'client/src/index.js'),
	// ROLE: webpack begins executing (creates folder dist with file bundl.js)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { 
                test: /\.(sa|sc|c)ss$/, 
                use: ['css-loader', 'style-loader'],
            },
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            { 
				test: /\.s[ac]ss$/,
				use: ['sass-loader']
			},
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/index.html"
        })
    ],
    devServer: {
        port: 8080, 
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    }
}