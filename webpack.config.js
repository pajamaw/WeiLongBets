var HtmlWebpackPlugin = require('html-webpack-plugin');
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

module.exports = {
  entry: [
    'babel/polyfill',
    './index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './node_modules/html-webpack-template/index.html',
      title: 'React!',
      devServer: 'http://localhost:3000',
      appMountId: 'app'
    })
  ]
}
