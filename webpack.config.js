const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    test: /\.(js|jsx)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.png$/,
    loader: "url-loader?limit=100000"
  },
  {
    test: /\.(jpg|jpeg|gif)$/,
    loader: "file-loader",
    options: {
      name: '[path][name]-[hash].[ext]',
      context: appPath
    }
  },
  {
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: 'url-loader?limit=10000'
  },
  {
    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
    use: 'file-loader'
  }
];

if (nodeEnv == 'production') {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        output: {
          comments: false,
          beautify: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html'),
      favicon: path.join(appPath, 'favicon.ico'),
      path: buildPath,
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style-[hash].css')
  );
  // Production rules
  rules.push(
    {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!sass-loader'
      })
    }
  );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html'),
      favicon: path.join(appPath, 'favicon.ico'),
      path: appPath,
      filename: 'index.html'
    }),
    new Dotenv({
      path: './.env'
    })
  );
  // Development rules
  rules.push(
    {
      test: /\.(css|scss)$/,
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
    'bootstrap-loader', './src/index.js'
  ],
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle-[hash].js'
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
