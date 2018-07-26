const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackMd5Hash = require('webpack-md5-hash')

const config = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    // removing 'app' directory from entry point,
    // since 'context' is taking care of that
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './[name].bundle.[chunkhash].js'
  },
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
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'embed:src', 'object:data'],
              minimize: true,
              removeComments: false,
              collapseWhitespace: true
            }
          }
        ]
      },
      // css-loader
      {
        test: /\.(s)?css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      // media file-loader
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      // fonts file-loader
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/fonts/',
              publicPath: '/assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['public']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true
    }),
    new MiniCssExtractPlugin({ filename: './css/[name].bundle.[contenthash].css', }),
    new WebpackMd5Hash()
  ],
  devServer: {
    // stats: 'errors-only',
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3000,
    contentBase: 'dist',
    open: true
  },
  devtool: 'inline-source-map'
}

module.exports = config
