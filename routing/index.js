const express=require('express');

app=express();

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.post('/contact',(req,res)=>{
    res.send('contact page');
})
app.put('/about',(req,res)=>{
    res.send('About Page');
})

app.delete('/blog',(req,res)=>{
    res.send('Blog Page');
})

app.listen(8000,()=>{
    console.log('servert run successfull');
})