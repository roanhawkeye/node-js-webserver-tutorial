'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
/*
* Serve static assets out of public
*/
app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Server running at port %d', 3000);
});

app.get('/', function(req, res){
	res.sendfile('./public/index.html');
});