var http = require("http");
var fs = require('fs');

var server=http.createServer(function (request, response) {
	var rurl = request.url;
	if (rurl=='/')
	{
		response.end("type 1 or 2 in link");
	}else if(rurl=='/1')
			{
					    fs.readFile('car1.html',function (err, data){
        					response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        					response.write(data);
        					response.end();
   					 });		
			}
			else if(rurl=='/2'){
							fs.readFile('car2.html',function (err, data){
        					response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        					response.write(data);
        					response.end();
   					 });
			}
})

server.listen(8081,"localhost",function (){
console.log("running");
});