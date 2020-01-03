const path = require('path');
const commen = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = merge(commen, {
  mode: "development",
  devtool: "none",
  output: {
    filename: "[name].bundled.js",
    path: path.resolve("dist")
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
});