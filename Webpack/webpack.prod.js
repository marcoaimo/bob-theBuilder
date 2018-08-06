const webpackPaths = require("./webpack.paths")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const config = {
  mode: "production",
  output: {
    path: webpackPaths.outputPath,
    filename: "./[name].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(["public", "dist"], {
      root: webpackPaths.root
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true })
    ]
  },
  devtool: "source-map"
}

module.exports = config
