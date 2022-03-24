const express=require('express')
const app=express()
const userRouter=require('./router/users.router')
app.use("/api/user",userRouter)

app.get('/',(req,res)=>{
    res.send('Nosto roki')
})
app.use((req,res)=>{
    res.send('Not a valid url');
})

module.exports=app;