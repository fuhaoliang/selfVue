const path = require('path')
const HtmlWepbackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWepbackPlugin({
      template: './public/index.html'
    })
  ]
}