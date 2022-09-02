const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({

    PostId:{type:mongoose.Schema.Types.ObjectId},
    Comment:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
    
},{versionKey:false});
const PostCommentModel=mongoose.model('comments',DataSchema);
module.exports=PostCommentModel