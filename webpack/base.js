const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|wav)$/i,
        use: "file-loader"
      },

       // Font stylesheets
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[hash].[ext]'
            }
          },
          'extract-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: [/fonts/]
      },
  
      // Font files
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        loader: 'file-loader',
        include: [/fonts/],
  
        options: {
          name: '[hash].[ext]',
          outputPath: 'css/',
          publicPath: url => '../css/' + url
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
