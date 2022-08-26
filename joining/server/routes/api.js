const express=require("express");
const CreatePost=require('../controllers/CreatePost');
const CreateComment=require('../controllers/CreateComment');
const joinTwoCollection=require('../controllers/joinTwoCollection');


const router=express.Router();

router.post("/CreatePost",CreatePost.CreatePost);
router.post("/CreateComment",CreateComment.CreateComment);
router.get("/joinTwoCollection",joinTwoCollection.joinTwoCollection);


module.exports=router;