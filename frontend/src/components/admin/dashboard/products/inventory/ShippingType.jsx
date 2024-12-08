import { Radio, Typography } from "@mui/material";
import React from "react";

const ShippingType = () => {
  return (
    <>
      <Typography className="text-color">Shipping Type</Typography>
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
          <Typography>Fullfilled by seller</Typography>
          <Typography className="text-sm text-color">
            You'll be responsible for product delivery. Any damage or delay
            during shipping may cost you a Damage fee
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
          <Typography>Fullfilled by Company name </Typography>
          <Typography className="text-sm text-color">
            Your product, Our responsibility.For a measly fee, we will handle
            the delivery process for you.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ShippingType;
