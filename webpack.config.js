const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|mp3|aac|ogg)$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
    ],
  },
  ...
};