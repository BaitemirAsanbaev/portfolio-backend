const Router = require("express").Router
const postRouter = new Router()
const accessMiddleware = require('..//middleware/access-middleware')
const postController = require("../controller/post-controller")
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

postRouter.post('/create', accessMiddleware, postController.createPost)
postRouter.get('/all', postController.getAllPosts)
postRouter.get('/:id', accessMiddleware, postController.getOneById)
postRouter.put('/update/:id', accessMiddleware, postController.updatePost)
postRouter.delete('/delete/:id', accessMiddleware, postController.deletePost)

module.exports = postRouter