const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    let decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decode?.id);
    next();
  } else {
    res.status(401);
    throw new Error("Session expired");
  }
});

module.exports = authMiddleware;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmM2Y2E2YzFjZDI1Mjc0ODlhN2Q4ZSIsImlhdCI6MTczMDk2NTAwNiwiZXhwIjoxNzMzNTU3MDA2fQ.CtSY_ONP_eYgUFnenTm-LUNjVWsVF-qd17w8TdrfLag
