var path = require("path")
var webpack = require("webpack")
var htmlWebpackPlugin =require("html-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "./src/app.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline: true
  }
}
