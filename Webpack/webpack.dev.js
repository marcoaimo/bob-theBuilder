const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')
const webpack = require('webpack')

const config = {
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackInlineSVGPlugin({ runPreEmit: true, customPath: 'app/assets/svgs/', customTag: 'embed' })
  ],
  devServer: {
    // stats: 'errors-only',
    host: 'localhost',
    compress: true,
    open: true
  },
  devtool: 'cheap-module-eval-source-map'
}

module.exports = config
