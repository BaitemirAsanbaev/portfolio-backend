const {Schema, model} = require("mongoose")

const PostSchema = new Schema({
    image: {
        data: Buffer,
        contentType: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = model("Post", PostSchema)