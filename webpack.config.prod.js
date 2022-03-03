const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('imports-loader');

const ASSET_PATH ='/';

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
	output: {
		publicPath: ASSET_PATH,
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'

	},
	devtool: false,
  cache: false,
  mode: "production",
  resolve: {
		extensions: ['.js', '.jsx']		
	},
	module: {
		rules: [
			{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
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
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader?name=[name].[ext]',
					}
				]
			},
			{

				test: /\.svg$/,
				loader: 'svg-inline-loader'

			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new webpack.BannerPlugin('CopyrightMC Production'),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('bundle.css'),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			"window.jQuery":"jquery",
			'Popper': 'popper.js'
		}),
		new webpack.DefinePlugin({
			'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
		})

	]
}

