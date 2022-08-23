const PostModel=require("../models/PostModel")
exports.CreatePost=(req,res)=>{
    let reqBody=req.body;
    PostModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
