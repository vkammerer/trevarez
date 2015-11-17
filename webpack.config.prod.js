import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
let pathToReact = path.resolve('node_modules', 'react/dist/react.min.js');
let pathToReactDom = path.resolve('node_modules', 'react-dom/dist/react-dom.min.js');

module.exports = {
	entry: [
		path.join(__dirname, 'src', 'main.jsx')
	],
	output: {
		path: path.join(__dirname, 'static'),
		filename: '[name].js',
		publicPath: '/static/'
	},
	resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
		alias: {
			'react': pathToReact,
			'react-dom': pathToReactDom
		}
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('[name].css')		
	],
	module: {
		loaders: [
			{
				test: /\.js|\.jsx$/,
				exclude: ['node_modules'],
				loader: 'babel',
				query: {compact: false} 
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules")
			}
		],
		noParse: [
			/node_modules\/react\//
		]
	}
};
