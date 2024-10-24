const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const sendMail = (email, password, username) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: "Account Registration",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: auto;
                  background: white;
                  border-radius: 8px;
                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }
              .header {
                  background-color: #4CAF50;
                  color: white;
                  padding: 20px;
                  text-align: center;
              }
              .content {
                  padding: 20px;
                  color: #333;
              }
              .content h1 {
                  color: #4CAF50;
              }
              .footer {
                  text-align: center;
                  padding: 10px;
                  background-color: #f1f1f1;
                  font-size: 12px;
              }
              .btn {
                  display: inline-block;
                  background-color: #4CAF50;
                  color: white;
                  padding: 10px 20px;
                  text-decoration: none;
                  border-radius: 5px;
              }
              img {
                  max-width: 100%;
                  height: auto;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Welcome to Our App!</h1>
              </div>
              <div class="content">
                  <img style='display:block;margin:auto' width='300px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png" alt="Welcome Image">
                  <h1>Hello, ${username}!</h1>
                  <p>Thank you for joining us. We are excited to have you on board!</p>
                  <p>Your account details are as follows:</p>
                  <p><strong>Username:</strong> ${username}</p>
                  <p><strong>Password:</strong> ${password}</p>
                  <p>Feel free to explore the app and let us know if you have any questions.</p>
                  <a href="http://yourapp.com" class="btn">Get Started</a>
              </div>
              <div class="footer">
                  <p>&copy; 2024 Walmart Pakistani. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("mail sent successfully");
    }
  });
};

const registerUser = asyncHandler(async (req, res) => {
  // get the data from the frontend
  const { email, f_name, l_name, phone_number, image, consent } = req.body;
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

  // generate random number

  const randomNumber = () => {
    const random = Math.random() * 999999;
    const round = Math.round(random);
    return round;
  };

  // create password
  const password = uuidv4();

  // create username
  const username = (
    f_name.slice(0, 1) +
    l_name.slice(0, 1) +
    randomNumber()
  ).toUpperCase();

  // send mail

  sendMail(email, password, username);

  // if user adds the required fields, add the data into the database

  const createdUser = await userModel.create({
    email,
    username,
    f_name,
    l_name,
    phone_number,
    password,
    consent,
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
    $or: [
      { email: entry_card },
      { phone_number: entry_card },
      { username: entry_card },
    ],
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
