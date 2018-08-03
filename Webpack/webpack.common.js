const webpackPaths = require("./webpack.paths")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackMd5Hash = require("webpack-md5-hash")

const config = {
  mode: "none",
  context: webpackPaths.entryPath,
  module: {
    rules: [
      // babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // html-loader
      {
        test: /\.(x)?html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "embed:src", "object:data", "use:xlinkHref"],
              minimize: true,
              removeComments: false,
              collapseWhitespace: true,
              interpolate: true
            }
          },
          {
            loader: "markup-inline-loader",
            options: {
              svgo: {
                plugins: [
                  { removeTitle: true }
                ]
              }
            }
          }
        ]
      },
      // css-loader
      {
        test: /\.(s)?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      // media file-loader
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/media/"
            }
          }
        ]
      },
      // fonts file-loader
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/fonts/",
              publicPath: "/assets/fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "./css/[name].bundle.[contenthash].css", }),
    new WebpackMd5Hash()
  ]
}

module.exports = config
