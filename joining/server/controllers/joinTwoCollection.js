const PostCommentModel=require('../models/PostCommentModel');

exports.joinTwoCollection=async (error,data)=>{
    try{
        data=await PostCommentModel.aggregate([

            {
                $lookup:{from :"posts",localField:"PostId",foreignField:"_id",as:"posts" }
            
            }
            
            ])
    }catch(error){
        return {status: "fail", data: err.toString()}
    }
}