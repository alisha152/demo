var express=require('express');
var app=express();

app.get('/',function(req,res){
console.log("Home");
res.send("Home");
})
app.get('/get',function(req,res){
console.log("get........");
res.send("get......");
})

app.post('/post',function(req,res){
console.log("post.....");
res.send("post......");
})

app.post('/post1',function(req,res){
console.log("post1.........");
res.send("post1......");
})

var server=app.listen(8081,"localhost");