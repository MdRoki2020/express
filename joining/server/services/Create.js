const Create= async (Request,PostModel) => {
    try{

        let PostBody=Request.body;

        let data = await PostModel.create(PostBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=Create