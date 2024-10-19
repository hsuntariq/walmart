import React from "react";
import { Container } from "react-bootstrap";
import RegForm from "../../components/Authentication/RegForm";
const Register = () => {
  return (
    <>
      <Container className="col-lg-4 col-md-6 p-5 col-sm-8">
        <div className="text-center">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png"
            alt="Walmart Logo"
          />
          <h5>Create your Walmart account</h5>
        </div>

        <RegForm />
      </Container>
    </>
  );
};

export default Register;
