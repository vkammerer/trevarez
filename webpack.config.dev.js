import path from 'path';
import webpack from 'webpack';

module.exports = {
	devtool: 'eval-source-map',
	eslint: {
		configFile: '.eslintrc'
	},
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, 'src', 'main.jsx')
	],
	output: {
		path: path.join(__dirname, 'static'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		preLoaders: [
			{
				test: /\.js|\.jsx$/,
				loader: 'eslint-loader',
				exclude: ['node_modules']
			}
		],
		loaders: [
			{
				test: /\.js|\.jsx$/,
				exclude: ['node_modules'],
				loader: 'babel'
			},
			{
				test: /\.woff$/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.png|\.jpg|\.svg$/,
				loader: 'file-loader?name=img/[name].[ext]'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			},
			{
				test: /\.md$/,
				loader: 'html!markdown'
			}
		]
	}
};
