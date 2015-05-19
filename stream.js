// JavaScript Document
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
	
	response.writeHead(200);
	
	/*
	request.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = request.read())) {
			response.write(chunk);
		}
	});
	request.om('end', function() {
		response.end();
	}); */
	
	request.pipe(response);
	
	
	
}).listen(8080);