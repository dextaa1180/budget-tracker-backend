const { success } = require("zod/v4");
const HttpError = require("../errors/HttpError");

function errorHandler(error, res, req, next) {
    if(error instanceof HttpError) {
        res.status(error.statusCode).json({
            success: false,
            message: error.message
        })
        return;
    }
    
    if(process.env.NODE_ENV === "development") {
        if(error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
            return;
        }
    }

    console.error(error)

    return res.status(500).json({
        success: false,
        message: "Server error"
    });
}

module.exports = errorHandler;