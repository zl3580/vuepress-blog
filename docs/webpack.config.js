module.exports = {
  plugins: [
    webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  }
}