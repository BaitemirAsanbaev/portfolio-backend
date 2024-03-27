const postModel = require('../models/post-model')

class PostService {
    async createPost(image, text) {
        return await postModel.create({
            image: {
                data: image.path,
                contentType: image.mimetype
            }, text
        });
    }

    async getAllPosts() {
        return postModel.find();
    }

    async getPostById(id) {
        return postModel.findById(id);
    }

    async updatePost(id, {image, text}) {
        return postModel.findByIdAndUpdate(id, {
            image: {
                data: image.path,
                contentType: image.mimetype
            }, text
        }, {new: true});
    }

    async deletePost(id) {
        return postModel.findByIdAndDelete(id);
    }
}

module.exports = new PostService()