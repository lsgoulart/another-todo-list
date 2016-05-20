var express = require('express');
var path = require('path');

var app = express();

if (process.env.NODE_ENV !== 'production') {

    var config = require('../webpack.config.js');
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.use(express.static('./dist'));
var port = 3000;

app.listen(process.env.PORT || port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
