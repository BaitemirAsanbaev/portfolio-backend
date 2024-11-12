const postModel = require('../models/post-model');
const fileService = require('./fileService');

class PostService {
    async createPost(image, text) {
        const imagePath = fileService.saveFile(image);
        return await postModel.create({
            image: imagePath, text
        });
    }

    async getAllPosts() {
        return postModel.find();
    }

    async getPostById(id) {
        return postModel.findById(id);
    }

    async updatePost(id, {image, text}) {        
        const imagePath = fileService.saveFile(image);
        return postModel.findByIdAndUpdate(id, {
            image: imagePath, text
        }, {new: true});
    }

    async deletePost(id) {
        return postModel.findByIdAndDelete(id);
    }
}

module.exports = new PostService()