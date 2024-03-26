const postService = require("../service/post-service")
const {checkError} = require("../helper/error-helper");
class PostController{
    async createPost (req, res, next){
        try{
            checkError(req, next)
            const{image, text} = req.body
            const response = await postService.createPost(image, text)
            return res.json(response)
        }
        catch (e){
            next(e)
        }
    }
}

module.exports = new PostController()