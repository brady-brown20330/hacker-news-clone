const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' :'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyPlugin({ patterns: [{ from : '_redirects' }] })
  ],
  devServer: {
    historyApiFallback: true
  }
}