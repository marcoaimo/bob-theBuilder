const webpackMerge = require("webpack-merge")

const envs = {
  development: "dev",
  production: "prod",
}
const env = envs[process.env.NODE_ENV || "development"]
const appMode = process.env.npm_package_config_app

const modeConfig = require(`./Webpack/webpack.${appMode}.js`)
const common = require("./Webpack/webpack.common")
const envConfig = require(`./Webpack/webpack.${env}.js`)

module.exports = webpackMerge(modeConfig, common, envConfig)
