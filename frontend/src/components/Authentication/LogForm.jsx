import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MyBtn from "./utilities/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import { loginUserData, userReset } from "../../features/auth/authSlice";
import toast from "react-hot-toast";

const LogForm = () => {
  const dispatch = useDispatch();
  const { userError, userMessage } = useSelector((state) => state.user);
  const [formFields, setFormFields] = useState({
    entry_card: "",
    password: "",
  });

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    dispatch(userReset());
  }, [userError]);

  const [error, setError] = useState({
    entry_card: false,
    password: false,
  });

  // desteructure
  const { entry_card, password } = formFields;

  // handle the change
  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!entry_card) {
      setError({
        entry_card: true,
        password: false,
      });
    }
    if (!password) {
      setError({
        entry_card: false,
        password: true,
      });
    }
    if (!entry_card && !password) {
      setError({
        entry_card: true,
        password: true,
      });
    }

    if (entry_card && password) {
      const userData = {
        entry_card,
        password,
      };

      dispatch(loginUserData(userData));
    }
  };

  return (
    <>
      <Form>
        <TextField
          error={error.entry_card}
          value={entry_card}
          onChange={handleChange}
          name="entry_card"
          label="Email"
          variant="outlined"
          type="email"
          className="w-100 my-2"
        />
        <TextField
          error={error.password}
          value={password}
          name="password"
          onChange={handleChange}
          label="Password"
          variant="outlined"
          type="password"
          className="w-100 my-2"
        />

        <MyBtn func={handleLogin} content="Login" />
      </Form>
    </>
  );
};

export default LogForm;
