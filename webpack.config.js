var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app.module.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    { test: /\.html$/, loader: "html" },
    { test: /\.less$/, loader: ExtractTextPlugin.extract('css!less') },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
    { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ]
  },
  devtool: "#inline-source-map",
  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ]
};
