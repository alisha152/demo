var express=require('express');
var app=express();
app.get('/get',function(req,res){
console.log("got a get request for the homepage");
res.send("Hello get");
})
app.post('/post',function(req,res){
console.log("got a post request for the homepage");
res.send("Hello post");
})

var server=app.listen(2000,function(){
var host=server.address().address
var port=server.address().port
console.log("example app listening at http://%s%s",host,port);
})