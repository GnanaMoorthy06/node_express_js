import { errstatus } from "../constants.js";

//centralized err handler

const errHandler = (err, req, res, next) => {
    console.log(err.stack);

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errstatus.validationErr:
            res.json({
                message: `validation err`,
                statusCode : 400
            })
            break;
        case errstatus.unauthorizedErr:
            res.json({
                message: `unauthorized err`,
                statusCode : 401
            })
            break;
        case errstatus.forbiddenErr:
            res.json({
                message: `forbidden err`,
                statusCode : 403
            })
            break;
        case errstatus.notFoundErr:
            res.json({
                message: `not Found err`,
                statusCode : 404
            })
            break;
        case errstatus.serverErr:
            res.json({
                message: `internal server err`,
                statusCode : 500
            })
            break;
        default:
            break;
    }


}

export default errHandler