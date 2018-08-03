const webpack = require("webpack")

const config = {
  mode: "development",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // stats: "errors-only",
    host: "localhost",
    compress: true,
    open: true,
    hot: true,
    inline: true,
    contentBase: "./app"
  },
  devtool: "cheap-module-eval-source-map"
}

module.exports = config
