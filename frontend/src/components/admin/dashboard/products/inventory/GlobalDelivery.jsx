import { Radio, TextField, Typography } from "@mui/material";
import React from "react";

const GlobalDelivery = () => {
  return (
    <>
      <Typography className="text-color">Global Delivery</Typography>
      <div className="d-flex align-items-center my-2 gap-2">
        <Radio
          sx={{
            color: "#7E4EE5", // Default (unselected) color
            "&.Mui-checked": {
              color: "#7E4EE5", // Color when selected
            },
            alignSelf: "start",
          }}
        />{" "}
        <div className="d-flex flex-column mt-2">
          <Typography>Worldwide Delivery</Typography>
          <Typography className="text-sm text-color">
            Only available with Shipping method: Fulfilled by Company name
          </Typography>
        </div>
      </div>
      <div className="d-flex align-items-center my-2 gap-2">
        <Radio
          sx={{
            color: "#7E4EE5", // Default (unselected) color
            "&.Mui-checked": {
              color: "#7E4EE5", // Color when selected
            },
            alignSelf: "start",
          }}
        />{" "}
        <div className="d-flex flex-column mt-2">
          <Typography>Selected Countries</Typography>
          <Typography className="text-sm text-color">
            <TextField
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
              size="small"
              label="Country"
              placeholder="e.g. USA"
            />
          </Typography>
        </div>
      </div>
      <div className="d-flex align-items-center my-2 gap-2">
        <Radio
          sx={{
            color: "#7E4EE5", // Default (unselected) color
            "&.Mui-checked": {
              color: "#7E4EE5", // Color when selected
            },
            alignSelf: "start",
          }}
        />{" "}
        <div className="d-flex flex-column mt-2">
          <Typography>Local Delivery</Typography>
          <Typography className="text-sm text-color">
            Deliver to your country of residence Change profile address
          </Typography>
        </div>
      </div>
    </>
  );
};

export default GlobalDelivery;
