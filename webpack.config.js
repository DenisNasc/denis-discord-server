const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  context: __dirname,
  target: 'node',
  mode: process.env.NODE_ENV,
  externals: [nodeExternals()],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Services: path.resolve(__dirname, 'src/services/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
