var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();

// Register '.must' extension with The Mustache Express
app.engine('must', mustacheExpress());

app.set('view engine', 'must');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render('base');
});

// datamodel
var data = {
    simple: {
        name: 'Maxis'
    }
};

console.log(data.simple);

app.get('/simple', function (req, res) {
    res.render('simple',data.simple );
});

var server = app.listen(3000, function() {
    console.log('listening at localhost:3000');
});


