const express=require('express');

app=express();

app.get('/',(req,res)=>{
    res.send('hello express js');
})

app.listen(8000,()=>{
    console.log('servert run successfull');
})