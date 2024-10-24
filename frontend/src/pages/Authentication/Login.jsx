import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import LogForm from "../../components/Authentication/LogForm";

const Login = () => {
  return (
    <>
      <Container className="col-lg-4 col-md-6 p-5 col-sm-8">
        <div className="text-center">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png"
            alt="Walmart Logo"
          />
          <Typography variant="h6">Sign in or create your account</Typography>
          <Typography variant="p" className="text-secondary">
            Not sure if you have an account? Enter your email and we’ll check
            for you.
          </Typography>
        </div>

        <LogForm />
      </Container>
    </>
  );
};

export default Login;
