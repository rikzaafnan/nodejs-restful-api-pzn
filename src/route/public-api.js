import express from "express";
import userController from "../controller/user-controller.js";
import { loggingMiddleware } from "../middleware/logging-middleware.js";

const publicRouter = new express.Router();
publicRouter.use(loggingMiddleware)
publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);

export {
    publicRouter
}