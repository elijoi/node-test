// JavaScript Document

var fs = require('fs');
var http = require('http');

var server = new http.createServer();

server.on('request', function(request, response) {
	var newFile = fs.createWriteStream('newjpg.jpg');
	
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;
	
	request.on('readable', function() {
		
		var chunk = null;
		
		response.write("on.readable \n");

		while(null !== (chunk = request.read())) {
			uploadedBytes += request.read().length;
			var progress = (uploadedBytes / fileBytes) * 100;
			response.write("progress: " + progress +"\n");
		}
	});
	
	request.pipe(newFile);
	
	request.on('end', function() {
		response.end("uploaded");
	});
	
}).listen(8080);
console.log('Litening on 8080...');
