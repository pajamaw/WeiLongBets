var HtmlWebpackPlugin = require('html-webpack-plugin');
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

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
    exclude: /(node_modules|)/,
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/i, loader: "json"}
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
    })
  ]
}
