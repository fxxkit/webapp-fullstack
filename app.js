var express = require('express'),
    app = express(),
    _ = require('lodash')._,
    cons = require('consolidate');

// Register '.tpl' extension with lodash templating
app.engine('tpl', cons.lodash);

app.set('view engine', 'tpl');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render('base');
});

// datamodel
var data = {
    simple: {
        name: 'kerker'
    }
};

console.log(data.simple);

app.get('/simple', function (req, res) {
    res.render('simple', data.simple );
});

app.get('/greeting', function (req, res) {
    res.render('index', req.query)
});

var server = app.listen(3000, function() {
    console.log('listening at localhost:3000');
});


