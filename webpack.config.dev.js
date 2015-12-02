import path from 'path';
import webpack from 'webpack';

module.exports = {
	devtool: 'eval-source-map',
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
				test: /\.png|\.jpg$/,
				loader: 'file-loader?name=img/[name].[ext]'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			}
		]
	}
};
