const webpackPaths = require('./webpack.paths')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  mode: 'production',
  output: {
    path: webpackPaths.outputPath,
    filename: './[name].bundle.[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackInlineSVGPlugin({ customTag: 'embed' }),
    new CleanWebpackPlugin(['public'])
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true })
    ]
  },
  devtool: 'source-map'
}

module.exports = config