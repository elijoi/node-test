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
		response.write("Bytes: " + fileBytes + "\n");
		console.log("Bytes: " + fileBytes + "\n");
		response.write("on->readable \n");
		console.log("on->readable \n");
		
		while(null !== (chunk = request.read())) {
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes) * 100;
			response.write("progress: " + progress +"\n");
			console.log("progress: " + progress +"\n");
		}

			
	});
	
	
	request.pipe(newFile);
	
	request.on('end', function() {
		response.end("uploaded");
	});
	
}).listen(8080);
console.log('XXXXX on 8080...');
