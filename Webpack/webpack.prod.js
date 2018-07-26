const webpackPaths = require('./webpack.paths')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  mode: 'production',
  output: {
    path: webpackPaths.outputPath,
    filename: './[name].bundle.[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['public'])
  ]
}

module.exports = config
