module.exports = {
  entry: "./src/scripts/main.jsx",
  output: {
    filename: "./dist/scripts/bundle.js"
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
