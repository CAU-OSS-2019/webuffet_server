const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    'webuffet.server': ['babel-polyfill', './src/app.js']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/build',
    filename: '[name].built.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      Configs: __dirname + '/src/configs',
      Routes: __dirname + '/src/routes',

      DB: __dirname + '/src/app/db',
      Provider: __dirname + '/src/app/provider'
    }
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  }
}