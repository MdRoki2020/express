const express=require('express')
const app=express()
const bodyParser=require('body-parser');
const port=3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user',(req,res)=>{
    const name=req.body.name
    const age=req.body.age
    res.send(`welcome ${name}! your age ${age}`)
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})