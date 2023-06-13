const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
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
    new webpack.EnvironmentPlugin({
      SUPABASE_API_KEY: toString(process.env.SUPABASE_API_KEY),
      SUPABASE_URL: toString(process.env.SUPABASE_URL),
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
