var HtmlWebpackPlugin = require('html-webpack-plugin');
var DefinePlugin = require('extended-define-webpack-plugin')

module.exports = {
  entry: [
    'babel/polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/i, loader: "json-loader"}
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './node_modules/html-webpack-template/index.ejs',
      title: 'React!',
      devServer: 'http://localhost:3000',
      appMountId: 'root'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
