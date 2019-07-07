
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
var express = require("express");
var app = express();

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/last200.html');
});

// Only works on 3000 regardless of what I set environment port to or how I set
// [value] in app.set('port', [value]).
// app.listen(3000);
app.listen(app.get('port'));
