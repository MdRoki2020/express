const express=require("express");
const CreatePost=require('../controllers/CreatePost');
const CreateComment=require('../controllers/CreateComment');


const router=express.Router();

router.post("/CreatePost",CreatePost.CreatePost);
router.post("/CreateComment",CreateComment.CreateComment);


module.exports=router;