const PostModel=require('../models/PostModel')
const CreateService=require("./CreatePost")

exports.CreatePost=async (req, res) => {
    let Result= await CreateService(req,PostModel)
    res.status(200).json(Result)
}
