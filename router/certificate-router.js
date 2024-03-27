const Router = require("express").Router
const certificateRouter = new Router()
const accessMiddleware = require('..//middleware/access-middleware')
const certificateController = require("../controller/certificate-controller")
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

certificateRouter.post('/create',upload.single('image'), accessMiddleware, certificateController.createCertificate)
certificateRouter.get('/all', certificateController.getAllCertificates)
certificateRouter.get('/:id', accessMiddleware, certificateController.getOneById)
certificateRouter.put('/update/:id',upload.single('image'), accessMiddleware, certificateController.updateCertificate)
certificateRouter.delete('/delete/:id', accessMiddleware, certificateController.deleteCertificate)

module.exports = certificateRouter