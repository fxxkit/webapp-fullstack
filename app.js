var express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars'),
	debug = require('debug')('handle');

var app = express();

// view engine setup
app.engine('.tpl', exphbs({
	defaultLayout: 'single', 
	extname: '.tpl'
}));

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

// set the template root to /views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.tpl');


// server route
app.get('/', function (req, res, next) {
    res.render('index', {
    	title: "Home"
    });
});

app.get('/greeting', function (req, res) {
    res.render('greeting', {
    	title: "Hola!",
		name: req.query.name
    });
});

// start the server
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
