const express=require('express')
const app=express();

const port=3000;

app.get("/",(req,res)=>{
    const id=req.query.id
    res.send(`your student id is :${id}`)
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})