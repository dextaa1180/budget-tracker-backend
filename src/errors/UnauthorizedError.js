const HttpError = require("./HttpError");

class UnathorizedError extends HttpError {
    constructor(message) {
        super(message, 401);
        this.name = "UnauthorizedError";
    }
}

module.exports = UnathorizedError