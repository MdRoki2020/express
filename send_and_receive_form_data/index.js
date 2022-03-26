const express=require('express')
const app=express()
const bodyParser=require('body-parser');
const port=3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/register.html');
})

app.post('/register',(req,res)=>{
    const fullName=req.body.fullName;
    const age=req.body.age;
    res.send(`<h2>Your Name is ${fullName} and Age is ${age}</h2>`)
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})