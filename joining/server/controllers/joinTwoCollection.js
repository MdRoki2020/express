const PostCommentModel=require('../models/PostCommentModel');

exports.joinTwoCollection= PostCommentModel.aggregate([{
    $lookup: {
        from: "posts", // collection to join
        localField: "PostId",//field from the input documents
        foreignField: "_id",//field from the documents of the "from" collection
        as: "posts"// output array field
    }
}],function (err, data) {
return res.json(data);
//handle error case also

});





// exports.joinTwoCollection=async (err,data)=>{
//     try{
//         data=await PostCommentModel.aggregate([

//             {
//                 $lookup:{from :"posts",localField:"PostId",foreignField:"_id",as:"posts" }
            
//             }
            
//             ])
//     }catch(err){
//         return {status: "fail", data: err.toString()}
//     }
// }