
var http=require("http");
 var server=http.createServer(function (request, response) {
  response.setHeader("anjluuuuuuuuuu","400");
   response.write("abc\n");
console.log(Object.keys(request));
   response.end('Hello World\n');
});
server.listen(8081);
console.log("hellooo");

