const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  entry: {
    // removing "app" directory from entry point,
    // since "context" is taking care of that
    app: "./app.js"
  },
  plugins: [
    // main app
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "./index.html",
      chunks: ["app"],
      hash: true
    })
  ]
}

module.exports = config
