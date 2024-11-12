const projectModel = require('../models/project-model');
const fileService = require('./fileService');

class ProjectService {
    async createProject(image, project) {
        const imagePath = fileService.saveFile(image);
        return await projectModel.create({...project, image:imagePath});
    }

    async getAllProjects() {
        return projectModel.find();
    }

    async getProjectById(id) {
        return projectModel.findById(id);
    }

    async updateProject(id, image, project) {
        const imagePath = fileService.saveFile(image);
        return projectModel.findByIdAndUpdate(id, {...project, image:imagePath}, {new: true});
    }

    async deleteProject(id) {
        return projectModel.findByIdAndDelete(id);
    }
}

module.exports = new ProjectService()