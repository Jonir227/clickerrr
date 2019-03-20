const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // js / ts 사용 용도
        test: /.(t|j)sx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      inject: true,
    }),
  ],
  // 데브서버
  devtool: 'source-map',
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
