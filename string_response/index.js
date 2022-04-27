const express=require('express');

app=express();

//simple string response..
app.get('/one',(req,res)=>{
    res.end('this is simple string response');
})

app.post('/two',(req,res)=>{
    res.end('this is simple string response');
})


app.listen(8000,()=>{
    console.log('servert run successfull');
})