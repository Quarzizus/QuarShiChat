const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    // important for react.router
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  module: {
    rules: [
      // rules js,jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // rules html
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        // rules css and scss
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        // rules for png, gif,jpg,svg
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            // any file into assets with extensions of media
            options: { name: "images/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  // important for react.router
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      // any file into assets with extensions .css
      filename: "[name].css",
    }),
  ],
};
