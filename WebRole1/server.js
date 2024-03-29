//var express = require('express')

//var port = process.env.port || 1337;
//var app = express.createServer();

//app.get('/', function (req, res) {
//    res.send('Hello World');
//});

//app.listen(port);

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();
var port = process.env.port || 1337;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
