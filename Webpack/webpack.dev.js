const webpack = require('webpack')

const config = {
  mode: 'development',
  output: {
    filename: './[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // stats: 'errors-only',
    compress: true,
    host: 'localhost',
    port: 3000,
    open: true
  },
  devtool: 'source-map'
}

module.exports = config
