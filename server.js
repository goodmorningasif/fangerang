const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.common.js');
const options = {
  contentBase: '/.dist',
  hot: true,
  // host: 'localhost',
}
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);
const port = process.env.PORT || 5000;

server.listen(process.env.PORT || 5000, function() {
  console.log(`Fangarang listening on port ${port}!\n`);
});
