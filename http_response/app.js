const express=require('express');
const { send } = require('process');
const app=express();
const userRouter=require('./router/users.router');
app.use("/api/user",userRouter);

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname + "/views/index.html")
})
app.get('/register',(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname + "/views/register.html");
})
app.get('/login',(req,res)=>{
    res.cookie('name','roki');
    res.cookie('age','30');
    res.append('id','13000');
    res.end();
})

app.use((req,res)=>{
    res.send('Invlid URL')
})

module.exports=app;