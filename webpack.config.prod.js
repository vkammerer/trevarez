import path from 'path';
import webpack from 'webpack';
let pathToReact = path.resolve('node_modules', 'react/dist/react.min.js');
let pathToReactDom = path.resolve('node_modules', 'react-dom/dist/react-dom.min.js');

module.exports = {
	entry: [
		path.join(__dirname, 'src', 'main.js')
	],
	output: {
		path: path.join(__dirname, 'static'),
		filename: '[name].js',
    publicPath: '/static/'
	},
	resolve: {
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
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
	      exclude: ['node_modules'],
				loader: 'babel',
				query: {compact: false} 
			}
		],
    noParse: [
			/node_modules\/react\//
    ]
	}
};
