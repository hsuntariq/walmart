const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  // get the data from the frontend
  const { email, f_name, l_name, phone_number, image, password } = req.body;
  // check if user adds the required fields
  if (!email || !f_name || !l_name || !phone_number) {
    res.status(400);
    throw new Error("Please enter the relevant fields");
  }

  // check if user already exists
  const checkEmail = await userModel.findOne({ email });
  const checkPhone = await userModel.findOne({ phone_number });

  if (checkEmail) {
    res.status(401);
    throw new Error("Email already registered");
  }
  if (checkPhone) {
    res.status(401);
    throw new Error("Phone number already registered");
  }

  // encypt the password

  // const hashedPass = await bcrypt.hash(uuidv4(), 10);

  // if user adds the required fields, add the data into the database

  const createdUser = await userModel.create({
    email,
    f_name,
    l_name,
    phone_number,
    password: uuidv4(),
  });

  res.send(createdUser);
});

const loginUser = asyncHandler(async (req, res) => {
  // get the date from the frontend
  const { entry_card, password } = req.body;

  // check if user adds the entry_card and password
  if (!entry_card || !password) {
    res.status(400);
    throw new Error("Please enter the relevent fields!");
  }

  // find user based on phone number or email
  const findUser = await userModel.findOne({
    $or: [{ email: entry_card }, { phone_number: entry_card }],
  });

  // if user doesnt exists, throw an error

  if (!findUser) {
    res.status(401);
    throw new Error("Invalid Email or Phone");
  }

  // if user exists, check if password matches

  if (findUser) {
    if (findUser.password == password) {
      res.send(findUser);
    } else {
      res.status(401);
      throw new Error("Invalid Password");
    }
  }
});

module.exports = {
  registerUser,
  loginUser,
};
