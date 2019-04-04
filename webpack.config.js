const path = require('path');
const combinedLoaders = require('webpack-combine-loaders');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client/src'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: combinedLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[loader]__[hash:base64:5]'
            }
          }
        ])
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
