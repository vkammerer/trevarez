import path from 'path';
import webpack from 'webpack';

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, 'src', 'main.js')
	],
	output: {
		path: path.join(__dirname, 'static'),
		filename: '[name].js',
		publicPath: '/static/'
	},
	plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				loader: 'babel'
			}
		]
	}
};
