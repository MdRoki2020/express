const express=require('express');
const router=express.Router();


router.get('/register',(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname + "/views/register.html");
})
router.get('/login',(req,res)=>{
    res.send('login route');
})

module.exports=router;