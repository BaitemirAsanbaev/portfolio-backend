const projectService = require("../service/project-service")
const {validationResult} = require("express-validator");
const ApiErrors = require("../exceptions/api-error");
const {ObjectId} = require("mongodb");

class ProjectController {
    async createProject(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const image = req.file
            const project = req.body
            const response = await projectService.createProject(image, project)
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async getAllProjects(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const response = await projectService.getAllProjects()
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async getOneById(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({message: "Invalid ID format"});
            }

            const response = await projectService.getProjectById(id)
            if (!response) {
                return res.status(404).json({message: "Project not found"});
            }
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async updateProject(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({message: "Invalid ID format"});
            }

            const image = req.files
            const project = req.body
            const response = await projectService.updateProject(id, image, project)

            if (!response) {
                return res.status(404).json({message: "Project not found"});
            }
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async deleteProject(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({message: "Invalid ID format"});
            }

            const response = await projectService.deleteProject(id)

            if (!response) {
                return res.status(404).json({message: "Project not found"});
            }
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProjectController()