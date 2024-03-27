const certificateModel = require('../models/certificate-model')

class CertificateService {
    async createCertificate(image) {
        return await certificateModel.create({
            image: {
                data: image.path,
                contentType: image.mimetype
            }
        });
    }

    async getAllCertificates() {
        return certificateModel.find();
    }

    async getCertificateById(id) {
        return certificateModel.findById(id);
    }

    async updateCertificate(id, {image}) {
        return certificateModel.findByIdAndUpdate(id, {
            image: {
                data: image.path,
                contentType: image.mimetype
            }
        }, {new: true});
    }

    async deleteCertificate(id) {
        return certificateModel.findByIdAndDelete(id);
    }
}

module.exports = new CertificateService()