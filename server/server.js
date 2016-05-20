var express = require('express');
var path = require('path');

var app = express();

var env = process.env.NODE_ENV || 'development';

if (env !== 'production') {
    var config = require('../webpack.config.js');
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}

process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + '/public'));

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

var port = 3000;

app.listen(process.env.PORT || port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
