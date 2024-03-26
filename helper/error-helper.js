const ApiErrors = require('../exceptions/api-error')
const {validationResult} = require("express-validator")
const {models} = require("mongoose");

module.exports = checkError = (req, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new ApiErrors("validation error", errors.array()))
    }
}