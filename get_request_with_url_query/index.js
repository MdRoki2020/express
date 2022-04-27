const express=require('express');

app=express();

app.get('/',(req,res)=>{

    let firstname=req.query.firstname;
    let lastname=req.query.lastname;

    res.end(firstname);


}).listen(8000);
