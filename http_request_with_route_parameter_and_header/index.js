const express=require('express')
const app=express()

const port=3000;
//for router perameter..
// app.get('/userId/:id/userAge/:age',(req,res)=>{
//     const id=req.params.id
//     const age=req.params.age
//     res.send(`student id is :${id} student age is :${age}`)
// })

//for header..(check with postman)
app.get('/',(req,res)=>{
    const id=req.header('id')
    const age=req.header('age')
    res.send(`student id is :${id} student age is :${age}`)
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})