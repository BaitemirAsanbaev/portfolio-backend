const { Schema, model } = require("mongoose");

const CertificateSchema = new Schema({
    image: {
        data: { type: Buffer, required: true },
        contentType: { type: String, required: true }
    }
});

module.exports = model("Certificate", CertificateSchema);
