/**
*
* Webpack Common Config
* @author Logan Wilquin
*
**/

const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./../../src/client/index.html'),
      favicon: path.resolve(__dirname,'./../../src/client/img/favicon.ico')
    }),
    new NpmInstallPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'./../../dist')
  }
}
