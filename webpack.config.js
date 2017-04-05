const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';

const sourcePath = path.join(__dirname);
const appPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');
const imgPath = path.join(__dirname, './img');

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10'
          ]
        })
      ],
      context: sourcePath
    }
  })
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ]
  },
  {
    test: /\.png$/,
    loader: "url-loader?limit=100000"
  },
  {
    test: /\.jpg$/,
    loader: "file-loader"
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  }
];

if (nodeEnv == 'production') {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      compress: {
        screw_ie8: true,
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html'),
      path: buildPath,
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style-[hash].css')
  );
  // Production rules
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!sass-loader'
      })
    }
  );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
  // Development rules
  rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?sourceMap',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }
  );
  
}

module.exports = {
  devtool: nodeEnv == 'production' ? 'cheap-module-source-map' : 'eval',
  entry: [
    './src/index.js'
  ],
  output: {
    path: buildPath,
    publicPath: '/',
    sourceMapFilename: '[file].map',
    filename: 'bundle.js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(sourcePath, 'node_modules'),
      appPath
    ],
  },
  plugins,
  devServer: {
    historyApiFallback: true,
    contentBase: nodeEnv == 'production' ? './build' : './src',
    compress: true,
  }
};
