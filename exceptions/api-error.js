module.exports = class ApiErrors extends Error{
    status
    error
    constructor(status, message, errors = []) {
        super(message);
        this.status = status
        this.error = errors
    }
    static NotAdminError(){
        return new ApiErrors(401, "User is not admin", )
    }
    static BadRequest( message, errors = []){
        return new ApiErrors(400, message, errors)
    }
}