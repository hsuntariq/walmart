import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../assets/images/logo.webp";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import MyBtn from "../../../components/Authentication/utilities/MyBtn";
import { IoIosWarning } from "react-icons/io";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(true);
  const [count, setCount] = useState(0);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  // destructure
  const { email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setCount(count + 1);
  }, []);

  const checkFocus = () => {
    if (email.length == 0 && focus && count <= 1) {
      setError(false);
    } else if (email.length > 0) {
      setError(false);
      setCount(count + 1);
    } else if (email.length == 0) {
      setError(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    checkFocus();
  }, [email]);

  return (
    <>
      <div className="container-fluid height-70">
        <Row className="p-4 height-70 " style={{ background: "#f4f5fa" }}>
          <Col
            xl={9}
            sm={6}
            className="h-100 d-flex img-bg d-none d-lg-flex position-relative"
          >
            <nav>
              <img src={logo} width={30} alt="logo" />
            </nav>
            <div className="image w-100 h-100 d-flex justify-content-center align-items-center">
              <img
                src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-login-light.png"
                width={"500px"}
                className="d-block mx-auto"
                alt=""
              />
            </div>
            <div className="leaf">
              <img
                width={"15%"}
                src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-2.png"
                alt="leaf logo"
                className="position-absolute bottom-0 start-0"
              />
            </div>
          </Col>
          <Col
            xl={3}
            sm={6}
            className="h-100 mx-auto d-flex flex-column justify-content-center align-items-center "
          >
            <Typography variant="h4">Welcome to walmart</Typography>
            <Typography variant="p" className="text-secondary">
              Please sign-in to your account and start the adventure
            </Typography>
            <div className="d-flex w-100 align-items-center position-relative">
              <TextField
                // onBlur={() => setCount(count + 1)}
                autoFocus={focus}
                onFocus={checkFocus}
                error={error}
                onChange={handleChange}
                label="Email"
                type="email"
                name="email"
                className="my-2 w-100"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8B50F8", // Change this to your desired color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#8B50F8", // Change label color on focus
                    },
                  },
                }}
              />
              {error ? (
                <IoIosWarning
                  color="red"
                  size={20}
                  cursor={"pointer"}
                  className="position-absolute"
                  style={{ right: "10px" }}
                />
              ) : (
                <>
                  {count > 1 && (
                    <FaCheck
                      color="green"
                      size={20}
                      cursor={"pointer"}
                      className="position-absolute"
                      style={{ right: "10px" }}
                    />
                  )}
                </>
              )}
            </div>
            <div className="d-flex w-100 align-items-center position-relative">
              <TextField
                onChange={handleChange}
                name="password"
                label="Password"
                type={`${showPass ? "text" : "password"}`}
                className="my-2 w-100"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8B50F8", // Change this to your desired color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#8B50F8", // Change label color on focus
                    },
                  },
                }}
              />
              {showPass ? (
                <FaEyeSlash
                  onClick={() => setShowPass(false)}
                  color="#8B50F8"
                  size={20}
                  cursor={"pointer"}
                  className="position-absolute"
                  style={{ right: "10px" }}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPass(true)}
                  color="#8B50F8"
                  size={20}
                  cursor={"pointer"}
                  className="position-absolute"
                  style={{ right: "10px" }}
                />
              )}
            </div>

            <div className="d-flex justify-content-between w-100 my-2">
              <div className="d-flex  align-items-center">
                <Checkbox defaultChecked className="p-0 me-2" />
                <Typography>Remember me</Typography>
              </div>
              <Typography>Forgot password</Typography>
            </div>
            <MyBtn content="Log In" bgColor="#8B50F8" size="50%" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
