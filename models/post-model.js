const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    image: {
        data: { type: Buffer, required: true },
        contentType: { type: String, required: true }
    },
    text: { type: String, required: true }
});

module.exports = model("Post", PostSchema);
