const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    UserEmail:{type:String},
    PostTitle:{type:Number},
    PostDescription:{type:Number},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PostModel=mongoose.model('posts',DataSchema);
module.exports=PostModel