const Router = require("express").Router
const router = Router()
const postRouter = require('./post-router')
const certificateRouter = require('./certificate-router')

router.use('/post', postRouter)
router.use('/certificate', certificateRouter)

module.exports = router