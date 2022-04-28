var express=require('express');
var multer=require('multer'); //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
var multer=multer();


var app=express();
app.use(multer.array());
app.use(express.static('public'));

app.post('/',(req,res)=>{
    let jsonData=req.body
    res.send(JSON.stringify(jsonData));

}).listen(3000);