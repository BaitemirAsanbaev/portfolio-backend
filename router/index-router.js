const Router = require("express").Router
const router = Router()
const postRouter = require('./post-router')
const certificateRouter = require('./certificate-router')
const projectRouter = require('./project-router')

router.use('/post', postRouter)
router.use('/certificate', certificateRouter)
router.use('/project', projectRouter)

module.exports = router