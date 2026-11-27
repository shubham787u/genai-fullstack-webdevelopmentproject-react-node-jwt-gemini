const express = require("express");
const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const authRouter = Router();

/**
 * @routes POST/api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

/**
 * @routes POST/api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @route POST/api/auth/logout
 * @description
 * @access Public
 */
authRouter.post("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
