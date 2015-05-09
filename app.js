var express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars');


var app = express();

// view engine setup
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));

// set the template root to /views
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/templates');

app.set('view engine', '.hbs');


app.get('/', function (req, res, next) {
    res.render('index');
});

app.get('/greeting', function (req, res) {
    res.render('greeting', req.query)
});

module.exports = app;
