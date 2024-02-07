const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    script: "./src/script.js",
    editor: "./src/editor/editor.js",
    player: "./src/kareoke_player/player.js",
    verify: "./src/verify/verify-email.js",
    reset: "./src/verify/password-reset.js",
    publish: "./src/publish/publish.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", MiniCssExtractPlugin.loader],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|mp4)$/,
        loader: "file-loader",
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  devtool: "source-map",
};
