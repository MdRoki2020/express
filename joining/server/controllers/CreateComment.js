const PostCommentModel=require("../models/PostCommentModel")
exports.CreateComment=(req,res)=>{
    let reqBody=req.body;
    PostCommentModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
