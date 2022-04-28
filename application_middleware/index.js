var express=require('express');
var app=express();

app.use((req,res,next)=>{
    console.log('i am application label middleware');
    next()
})

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.get('/contact',(req,res)=>{
    res.send('contact Page');
})
app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.listen(8000,()=>{
    console.log('servert run successfull');
})