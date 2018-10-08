const path = require('path');
const webpack - require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test:/\.css$/, loader: "style-loader!css-loader"}
    ]
  }
};