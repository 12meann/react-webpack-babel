const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true
        }
      }),
      new TerserPlugin()
    ]
  },
  plugins: [new CleanWebpackPlugin()]
});
