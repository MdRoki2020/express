const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    UserEmail:{type:String},
    PostTitle:{type:String},
    PostDescription:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PostModel=mongoose.model('posts',DataSchema);
module.exports=PostModel