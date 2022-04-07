const { resolve } = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, "./dist"),
    clean: true,
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWepackPlugin({
      template: resolve(__dirname, './public/index.html')
    })
  ]
}