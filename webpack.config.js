const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { preprocess } = require('./svelte.config');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      '@components': path.resolve(__dirname, './src/components'),
      '@models': path.resolve(__dirname, './src/models'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  output: {
    path: prod ? __dirname + '/public/dist' : __dirname + '/public/dev',
    filename: prod ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: prod ? '[name].[id].[contenthash].js' : '[name].[id].js',
  },
  module: {
    rules: [
      prod
        ? {
            test: /\.(?:svelte|m?js)$/,
            include: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, 'node_modules', 'svelte'),
            ],
            use: {
              loader: 'babel-loader',
            },
          }
        : {},
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  mode,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Poke Svelte League',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: prod ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  devtool: prod ? 'hidden-source-map' : 'source-map',
};
