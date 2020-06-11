module.exports = {
    mode: 'development',
    entry: [
      '@babel/polyfill', // enables async-await
      './client/index.js', // assumes your entry point is the index.js in the root of your project folder
    ],
    output: {
      path: __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: './public/bundle.js'
    },
    resolve:{
      extensions : ['.js', '.jsx']
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }