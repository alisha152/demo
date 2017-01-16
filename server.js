
var http=require("http");
http.createServer(function (request, response) {
  
   response.write("abc");
console.log(Object.key(request));
   response.end('Hello World\n');
};
server.listen(8081,hostname,function);

