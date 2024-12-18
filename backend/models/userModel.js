const mongoose = require("mongoose");

// create the table
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter the email"],
    unique: [true, "Email already registered"],
  },
  username: {
    type: String,
    required: [true, "Please enter the username"],
  },
  f_name: {
    type: String,
    required: [true, "Please enter the name"],
  },
  l_name: {
    type: String,
    required: [true, "Please enter the last name"],
  },
  phone_number: {
    type: String,
    required: [true, "Please enter the phone number"],
    unique: [true, "Phone number already present"],
  },
  image: {
    type: String,
    default: null,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  consent: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);
