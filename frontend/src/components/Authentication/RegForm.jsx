import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import MyBtn from "./utilities/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import { registerUserData } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
const RegForm = () => {
  const [phone, setPhone] = useState("");
  const [formFields, setFormFields] = useState({
    email: "",
    f_name: "",
    l_name: "",
  });

  // get the states from your global redux store

  const { userError, userMessage } = useSelector((state) => state.user);

  // show messages on change

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
  }, [userError]);

  //   destructure
  const { email, f_name, l_name } = formFields;

  //   handle the chanage

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      f_name,
      l_name,
      phone_number: phone,
    };
    dispatch(registerUserData(userData));
  };

  return (
    <>
      <Form>
        <TextField
          value={email}
          name="email"
          onChange={handleChange}
          className="w-100 my-3"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
        />

        <TextField
          value={f_name}
          name="f_name"
          onChange={handleChange}
          className="w-100 my-3"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />

        <TextField
          value={l_name}
          name="l_name"
          onChange={handleChange}
          className="w-100 my-3"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />

        <PhoneInput
          value={phone}
          onChange={(value) => setPhone(value)}
          label="Phone Number"
          variant="outlined"
          country={"pk"}
          placeholder="+92 315 8547438"
          className="w-100 mt-3"
        />
        <div className="d-flex align-items-start my-3">
          <Checkbox defaultChecked className="p-0 me-2" />
          <Typography variant="" className="fw-semibold">
            Send me emails about new arrivals, hot items, daily savings and
            more.
          </Typography>
        </div>
        <Typography variant="p" className="text-sm">
          By clicking Create Account, you acknowledge you have read and agreed
          to our Terms of Use and Privacy Policy. Message and data rates may
          apply. View our Mobile Alerts Terms.
        </Typography>

        <MyBtn handleRegister={handleRegister} />
      </Form>
    </>
  );
};

export default RegForm;
