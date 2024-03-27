const projectModel = require('../models/project-model')

class ProjectService {
    async createProject(project) {
        return await projectModel.create(project);
    }

    async getAllProjects() {
        return projectModel.find();
    }

    async getProjectById(id) {
        return projectModel.findById(id);
    }

    async updateProject(id, project) {
        return projectModel.findByIdAndUpdate(id, project, {new: true});
    }

    async deleteProject(id) {
        return projectModel.findByIdAndDelete(id);
    }
}

module.exports = new ProjectService()