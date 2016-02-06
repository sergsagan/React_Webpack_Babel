/**
 * Created by martynuk on 06.02.16.
 */

module.exports = {
	entry: './src/client.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	}
};