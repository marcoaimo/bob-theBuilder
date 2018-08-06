const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  entry: {
    // removing "app" directory from entry point,
    // since "context" is taking care of that
    app: "./app.js",
    desktop: "./desktop/app.js",
    mobile: "./mobile/app.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    // main app
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "./index.html",
      chunks: ["app", "commons"],
      hash: true
    }),
    // desktop app
    new HtmlWebpackPlugin({
      template: "desktop/index.html",
      filename: "./desktop/index.html",
      chunks: ["desktop", "commons"],
      hash: true
    }),
    // mobile app
    new HtmlWebpackPlugin({
      template: "mobile/index.html",
      filename: "./mobile/index.html",
      chunks: ["mobile", "commons"],
      hash: true
    })
  ]
}

module.exports = config
