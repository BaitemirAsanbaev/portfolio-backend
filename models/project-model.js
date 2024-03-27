const {Schema, model} = require("mongoose");

const ProjectSchema = new Schema({
    image: {
        data: {
            type: Buffer,
            required: true
        },
        contentType: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [{type: String}],
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    siteLink: {
        type: String,
        required: true
    },
    color1: {
        type: String,
        required: true
    },
    color2: {
        type: String,
        required: true
    },
    color3: {
        type: String,
        required: true
    }
});

module.exports = model("Project", ProjectSchema);
