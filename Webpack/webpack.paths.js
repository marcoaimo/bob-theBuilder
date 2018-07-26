const path = require('path')

config = {
  root: path.resolve(__dirname, '../'),
  entryPath: path.resolve(__dirname, '../', 'app'),
  outputPath: path.resolve(__dirname, '../', 'public'),
  templatePath: path.resolve(__dirname, '../', 'app/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
}

module.exports = config
