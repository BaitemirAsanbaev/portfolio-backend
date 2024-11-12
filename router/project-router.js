const Router = require("express").Router
const projectRouter = new Router()
const accessMiddleware = require('..//middleware/access-middleware')
const projectController = require("../controller/project-controller")

projectRouter.post('/create', accessMiddleware, projectController.createProject)
projectRouter.get('/all', projectController.getAllProjects)
projectRouter.get('/:id', accessMiddleware, projectController.getOneById)
projectRouter.put('/update/:id', accessMiddleware, projectController.updateProject)
projectRouter.delete('/delete/:id', accessMiddleware, projectController.deleteProject)

module.exports = projectRouter