const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    contentBase: path.join(__dirname, "dist"),
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "*": {
        context: ["/graphql"],
        target: "https://api.yelp.com/v3/graphql",
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: "",
        pathRewrite: { "/graphql": "" },
      },
    },
  },
  devtool: "inline-source-map",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  target: "web",
};
