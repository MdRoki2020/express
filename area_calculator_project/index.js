const express=require('express')
const app=express()
const bodyParser=require('body-parser');

const port=3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + "/circle.html");
})

app.get('/tringle',(req,res)=>{
    res.sendFile(__dirname + "/tringle.html");
})

app.post('/tringle',(req,res)=>{
    const base=req.body.base;
    const height=req.body.height;
    const area=0.5*base*height;
    res.send(`Area: ${area}`)
})

app.post('/circle',(req,res)=>{
    const radius=req.body.radius;
    const area=Math.PI*radius*radius;
    res.send(`Area: ${area}`);
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})