// Basic Lib Import
const express =require('express');
const router =require('./routes/api');
const app= new express();
const bodyParser =require('body-parser');


const cors =require('cors');

const mongoose =require('mongoose');


app.use(cors())




// Body Parser Implement
app.use(bodyParser.json())



// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.l3mtknu.mongodb.net/joining?retryWrites=true&w=majority"
let OPTION={user:'rsroki2022',pass:'AaBbCc2580!!@@',autoIndex:true}
mongoose.connect(URI,OPTION,(err)=>{
    console.log("Connection Success")
    console.log(err)
})


// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
