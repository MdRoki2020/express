const express=require("express");
const CreatePost=require('../controllers/CreatePost');


const router=express.Router();

router.post("/CreatePost",CreatePost.CreatePost)


module.exports=router;