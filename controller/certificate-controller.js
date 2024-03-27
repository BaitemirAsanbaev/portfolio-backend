const certificateService = require("../service/certificate-service")
const {validationResult} = require("express-validator");
const ApiErrors = require("../exceptions/api-error");
const {ObjectId} = require("mongodb");

class CertificateController {
    async createCertificate(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const image = req.file
            const response = await certificateService.createCertificate(image)
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async getAllCertificates(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const response = await certificateService.getAllCertificates()
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

            const response = await certificateService.getCertificateById(id)
            if (!response) {
                return res.status(404).json({message: "Certificate not found"});
            }
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async updateCertificate(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({message: "Invalid ID format"});
            }

            const image = req.file
            const response = await certificateService.updateCertificate(id, {image})

            if (!response) {
                return res.status(404).json({message: "Certificate not found"});
            }
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }

    async deleteCertificate(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()))
            }
            const id = req.params.id

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({message: "Invalid ID format"});
            }

            const response = await certificateService.deleteCertificate(id)

            if (!response) {
                return res.status(404).json({message: "Certificate not found"});
            }
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CertificateController()