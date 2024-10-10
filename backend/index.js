const express = require("express");
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const app = express();
require("dotenv").config();
require("colors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// make users api
app.use("/api/users", userRouter);

// import your error handler

app.use(errorHandler);
app.listen(process.env.PORT, () =>
  console.log(`Server started on port:${process.env.PORT.yellow}`)
);
