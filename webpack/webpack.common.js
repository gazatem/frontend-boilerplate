const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': Path.resolve(__dirname, '../src/scripts/index.js'),
    'register': Path.resolve(__dirname, '../src/scripts/register.js'),
    'handlebars': Path.resolve(__dirname, '../src/scripts/handlebars.js'),
    'login': Path.resolve(__dirname, '../src/scripts/login.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['login'],
      filename: 'login/index.html',
      template: Path.resolve(__dirname, '../src/login.handlebars')
    }),
    new HtmlWebpackPlugin({
      chunks: ['register'],
      filename: 'register/index.html',
      template: Path.resolve(__dirname, '../src/register.handlebars')
    })         
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      // Include pug-loader to process the pug files
      { test: /\.handlebars$/, loader: "handlebars-loader" },     
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
