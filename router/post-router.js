const Router = require("express").Router
const router = new Router()
// const {body} = require("express-validator")
const accessMiddleware = require('..//middleware/access-middleware')
const postController = require("../controller/post-controller")

router.post('/create', accessMiddleware, postController.createPost)
// router.get('/get/list', accessMiddleware, postController)
// router.get('/get/:id', accessMiddleware, postController)
// router.patch('/update/:id', accessMiddleware, postController)
// router.delete('/delete/:id', accessMiddleware, postController)

module.exports = router