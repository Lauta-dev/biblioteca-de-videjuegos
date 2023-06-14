const path = require("path");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
require("dotenv").config();

module.exports = {
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.EnvironmentPlugin({
      DB_SUPABASE_URL: toString(process.env.DB_SUPABASE_URL),
      DB_SUPABASE_KEY: toString(process.env.DB_SUPABASE_KEY),
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
