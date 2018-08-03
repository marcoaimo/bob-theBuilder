const webpackPaths = require("./webpack.paths")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const config = {
  mode: "production",
  output: {
    path: webpackPaths.outputPath,
    filename: "./[name].bundle.[chunkhash].js"
  },
  plugins: [
    new CleanWebpackPlugin(["public"])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          minChunks: 2
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
