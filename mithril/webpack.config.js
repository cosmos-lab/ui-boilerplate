const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const config = (env, argv) => {
  return {
    devtool: argv.mode === 'production' ? false : 'source-map',
    entry: './src/App.ts',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `[fullhash].js`,
    },
    module: {
      rules: [
        {
          test: /\.ts(x)?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.(ico)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ]
    },
    resolve: {
      extensions: [
        '.tsx',
        '.ts',
        '.js'
      ],
      alias: {
        ['@']: path.resolve(__dirname, 'src/'),
        ['@components']: path.resolve(__dirname, 'src/components/'),
        ['@views']: path.resolve(__dirname, 'src/views/'),
        ['@state']: path.resolve(__dirname, 'src/state/'),
        ['@styles']: path.resolve(__dirname, 'src/styles/'),
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './static/index.html',
        filename: './index.html',
        chunks: ['main'],
      }),
      // new CopyPlugin({
      //   patterns: [
      //     { from: "source", to: "destination" },
      //   ],
      // }),

    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        extractComments: false,
      })],
    }
  };
}

module.exports = config;