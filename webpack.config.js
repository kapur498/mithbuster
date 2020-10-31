const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'src/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			m: 'mithbuster'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /\/node_modules\//,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|svg|jpeg|gif)$/,
				use: ['file-loader']
			}
		],
	},
	devServer: {
		contentBase: './dist'
	}
}
