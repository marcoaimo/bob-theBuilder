const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const config = {
  mode: "development",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false })
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
