import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import MyBtn from "./utilities/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import { registerUserData, userReset } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import moment from "moment";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const RegForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: false,
    f_name: false,
    l_name: false,
    phone: false,
  });
  const [phone, setPhone] = useState("");
  const [formFields, setFormFields] = useState({
    email: "",
    f_name: "",
    l_name: "",
    consent: true,
  });

  // get the required states from the reducer

  const { userError, userMessage, userSuccess } = useSelector(
    (state) => state.user
  );

  // display errors

  useEffect(() => {
    if (userError) {
      toast.error(userMessage, {
        style: {
          color: "white",
          background: "rgba(0,0,0,0.7)",
          borderRadius: "50px",
        },
      });
    }

    if (userSuccess) {
      toast.custom((t) => (
        <div
          className={`toast show ${
            t.visible ? "fade" : "hide"
          } d-flex align-items-center text-bg-light border-0 shadow-lg`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ maxWidth: "400px", marginBottom: "10px" }}
        >
          <div className="toast-body d-flex">
            <div className="me-3">
              <img
                src="https://assets-global.website-files.com/64a451e94283e66242793f67/655929b8b8b004eea77419da_Walmart.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
            <div className="flex-grow-1">
              <strong className="me-auto">Walmart Team</strong>
              <p className="mb-0">
                Credentials have been sent to your email address
                <p className="text-secondary text-sm">
                  {moment().format("Do MMMM YYYY h:mm")}
                </p>
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            onClick={() => toast.dismiss(t.id)}
          ></button>
        </div>
      ));

      setFormFields({
        email: "",
        f_name: "",
        l_name: "",
        consent: true,
      });
      setPhone("");

      navigate("/login");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  //   destructure
  const { email, f_name, l_name, consent } = formFields;

  //   handle the chanage

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!phone) {
      setError({ email: false, f_name: false, l_name: false, phone: true });
    }
    if (!email) {
      setError({ email: true, f_name: false, l_name: false, phone: false });
    }
    if (!f_name) {
      setError({ email: false, f_name: true, l_name: false, phone: false });
    }
    if (!l_name) {
      setError({ email: false, f_name: false, l_name: true, phone: false });
    }

    // only proceed if all the fields are entered

    if (email && f_name && l_name && phone) {
      setError({ email: false, f_name: false, l_name: false, phone: false });
      const userData = {
        email,
        f_name,
        l_name,
        phone_number: phone,
        consent,
      };
      dispatch(registerUserData(userData));
    }
  };

  return (
    <>
      <Form>
        <TextField
          error={error.email}
          value={email}
          name="email"
          onChange={handleChange}
          className={`w-100 my-3  `}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
        />
        {error.email && (
          <p className="text-danger m-0 fw-bold">Plese enter your email</p>
        )}

        <TextField
          error={error.f_name}
          value={f_name}
          name="f_name"
          onChange={handleChange}
          className={`w-100 my-3  `}
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />
        {error.f_name && (
          <p className="text-danger m-0 fw-bold">Plese enter your first name</p>
        )}

        <TextField
          error={error.l_name}
          value={l_name}
          name="l_name"
          onChange={handleChange}
          className={`w-100 my-3`}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        {error.l_name && (
          <p className="text-danger m-0 fw-bold">Plese enter your last name</p>
        )}

        <PhoneInput
          value={phone}
          onChange={(value) => setPhone(value)}
          label="Phone Number"
          variant="outlined"
          country={"pk"}
          placeholder="+92 315 8547438"
          className={`w-100 mt-3 `}
          enableSearch={true}
        />
        {error.phone && (
          <p className="text-danger m-0 fw-bold">
            Plese enter your phone number
          </p>
        )}
        <div className="d-flex align-items-start my-3">
          <Checkbox
            defaultChecked
            className="p-0 me-2"
            checked={consent || false} // ensure it's checked based on the state
            onChange={(e) =>
              setFormFields({ ...formFields, consent: e.target.checked })
            }
          />
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

        <MyBtn func={handleRegister} content="Register" />
      </Form>
    </>
  );
};

export default RegForm;
