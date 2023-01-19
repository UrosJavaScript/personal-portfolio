import TerserPlugin from 'terser-webpack-plugin'

export const entry = `${__dirname}/src/index.js`
export const output = {
  path: `${__dirname}/build`,
  publicPath: '/build/',
  filename: 'bundle.js',
}
export const module = {
  rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
}
export const optimization =
  process.argv.indexOf('-p') === -1
    ? {}
    : {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              output: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ],
      }
export const devServer = {
  historyApiFallback: {
    rewrites: [{ from: /\//, to: '/404.html' }],
  },
}
