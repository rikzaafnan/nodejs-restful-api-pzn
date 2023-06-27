import {ResponseError} from "../error/response-error.js";
import {logger} from "../application/logging.js";
import { json, request } from "express";

const errorMiddleware = async (err, req, res, next) => {

    if (!err) {
        logger.info(`${req.method} ${req.url}`);
        next();
        return;
    }

    if (err instanceof ResponseError) {
        logger.error(`Error: ${err.message} || Request body: ${JSON.stringify(req.body)}`);
        res.status(err.status).json({
            errors: err.message
        }).end();
    }  else {
        logger.error(`Error: ${err.message} || Request body: ${JSON.stringify(req.body)}`);
        res.status(500).json({
            errors: err.message
        }).end();
    }
}

export {
    errorMiddleware
}