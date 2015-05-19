// JavaScript Document

var http = require('http');

var EventEmitter = require('events').EventEmitter;

http.createServer( function( request, response) {
	response.writeHead(200);
	response.write("Hello Node");
	response.end();
}).listen(8080);
console.log('Listening on 8080...');