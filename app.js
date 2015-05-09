var express = require('express'),
    app = express();

// Register '.tpl' extension with lodash templating
require('lodash-express')(app, 'tpl');
app.set('view engine', 'tpl');

// set the template root to /templates (default: /views)
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

app.get('/simple', function (req, res) {
    res.render('simple', data.simple );
});

app.get('/greeting', function (req, res) {
    res.render('index', req.query)
});


var server = app.listen(3000, function() {
    console.log('listening at localhost:3000');
});


