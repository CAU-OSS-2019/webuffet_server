const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    'webuffet.server': ['/src/app.js']
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
