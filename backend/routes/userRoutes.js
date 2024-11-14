const express = require("express");
const {
  registerUser,
  loginUser,
  uploadImage,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const userRouter = express.Router();

userRouter.post("/register-user", registerUser);
userRouter.post("/login-user", loginUser);
userRouter.post("/upload-image", authMiddleware, uploadImage);
module.exports = userRouter;
