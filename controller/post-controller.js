const postService = require("../service/post-service")
const {validationResult} = require("express-validator");
const ApiErrors = require("../exceptions/api-error");
const { ObjectId } = require("mongodb");

class PostController{
    async createPost (req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(new ApiErrors("validation error", errors.array()))
            }
            const{ text } = req.body
            const image = req.file
            const response = await postService.createPost(image, text)
            return res.json(response)
        }
        catch (e){
            next(e)
        }
    }
    async getAllPosts (req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(new ApiErrors("validation error", errors.array()))
            }
            const response = await postService.getAllPosts()
            return res.json(response)
        }
        catch (e){
            next(e)
        }
    }
    async getOneById (req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }

            const response = await postService.getPostById(id)
            if (!response) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.json(response)
        }
        catch (e){
            next(e)
        }
    }
    async updatePost (req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }

            const{ text } = req.body
            const image = req.file
            console.log({text, image})
            const response = await postService.updatePost(id, {image, text})

            if (!response) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.json(response)
        }
        catch (e){
            next(e)
        }
    }
    async deletePost (req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }

            const response = await postService.deletePost(id)

            if (!response) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.json(response)
        }
        catch (e){
            next(e)
        }
    }
}

module.exports = new PostController()