require("dotenv").config()
const ApiError = require("../exceptions/api-error")
module.exports = async (req, res, next)=>{
    try {
        const password = req.headers.password;
        if(password !== process.env.PASSWORD){
            return next(ApiError.NotAdminError())
        }
        next()
    }
    catch (e) {
        next(ApiError.NotAdminError())
    }
}