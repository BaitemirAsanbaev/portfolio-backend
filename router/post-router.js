const Router = require("express").Router
const router = new Router()
// const {body} = require("express-validator")
const accessMiddleware = require('..//middleware/access-middleware')
const postController = require("../controller/post-controller")
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/create',upload.single('image'), accessMiddleware, postController.createPost)
router.get('/all', postController.getAllPosts)
router.get('/:id', accessMiddleware, postController.getOneById)
router.put('/update/:id',upload.single('image'), accessMiddleware, postController.updatePost)
router.delete('/delete/:id', accessMiddleware, postController.deletePost)

module.exports = router