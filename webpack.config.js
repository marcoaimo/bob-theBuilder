const webpackMerge = require('webpack-merge')

const envs = {
  development: 'dev',
  production: 'prod',
}
const env = envs[process.env.NODE_ENV || 'development']

const common = require('./Webpack/webpack.common')
const envConfig = require(`./Webpack/webpack.${env}.js`)

module.exports = webpackMerge(common, envConfig)
