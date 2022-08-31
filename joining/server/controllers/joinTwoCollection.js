const PostCommentModel=require('../models/PostCommentModel');

exports.joinTwoCollection=async (err,data)=>{
    try{
        data=await PostCommentModel.aggregate([

            {
                $lookup:{from :"posts",localField:"PostId",foreignField:"_id",as:"posts" }
            
            }
            
            ])
    }catch(err){
        return {status: "fail", data: err.toString()}
    }
}