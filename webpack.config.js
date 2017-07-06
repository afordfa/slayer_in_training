module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    },
    ]
  },

  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "inline-source-map"
};