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
  }
];

if (nodeEnv == 'production') {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
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
      exclude: /node_modules/,
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
  devtool: nodeEnv == 'production' ? 'eval' : 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: buildPath,
    publicPath: '/',
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
