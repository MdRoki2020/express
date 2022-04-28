var express=require('express');
var multer=require('multer'); //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

var app=express();

var storage=multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'./uploads')
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname)
    }
})


var upload=multer({storage:storage}).single('myfile')

app.post("/",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.send('file upload failed');
        }else{
            res.send('file upload success');
        }
    })
}).listen(3000)
