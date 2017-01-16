var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/1', function (req, res) {
   res.sendFile( __dirname + "/" + "car1.html" );
})

app.use(express.static('public'));
app.get('/2', function (req, res) {
   res.sendFile( __dirname + "/" + "car2.html" );
})

app.use(express.static('public'));
app.get('/', function (req, res) {
	res.send("type 1 or 2");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("working", host, port))


})