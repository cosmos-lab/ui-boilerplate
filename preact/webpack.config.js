const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = (env, argv) => {
  return {
    devtool: argv.mode === 'production' ? false : 'source-map',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, '../server/embed'),
      filename: `[hash].js`,
    },

    module: {
      rules: [
        {
          test: /\.ts(x)?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(scss)$/,
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
        ['@util']: path.resolve(__dirname, 'src/util/'),
        ['@components']: path.resolve(__dirname, 'src/components/'),
        ['@views']: path.resolve(__dirname, 'src/views/'),
        ['@state']: path.resolve(__dirname, 'src/state/'),
        ['@styles']: path.resolve(__dirname, 'src/styles/'),
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: '../templates/index.tmpl',
        filename: './index.tmpl',
        favicon: './static/favicon.ico',
        chunks: ['main'],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "sw/*.*",
            to() {
              return "./[name][ext]";
            },
          },
          {
            from: "static",
            to: "static",
          },
          {
            from: "../templates/*.html",
            to() {
              return "./[name][ext]";
            },
          },
        ],
      }),
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