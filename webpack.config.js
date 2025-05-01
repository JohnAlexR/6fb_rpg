const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production", // or 'development' based on your environment
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Handle image files with file-loader
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets/",
              publicPath: "https://6fbrpg.s3.us-east-2.amazonaws.com/assets/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Handle font files
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash][ext][query]",
        },
      },
      {
        test: /\.(mp3|m4a)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/audio/[name].[ext]",
            publicPath:
              "https://6fbrpg.s3.us-east-2.amazonaws.com/assets/audio/",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "https://6fbrpg.s3.us-east-2.amazonaws.com/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
