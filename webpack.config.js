const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './public',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      'font-awesome': 'font-awesome/scss/font-awesome.scss'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 2 versions'
        }
      }
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 2 versions'
    }, {
      test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      server: './public',
      open: false
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/pug/index.pug',
      inject: true
    })
  ]
};
