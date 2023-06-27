import {logger} from "../application/logging.js";

const loggingMiddleware = (req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`);
    next();
  };

export {
    loggingMiddleware
}