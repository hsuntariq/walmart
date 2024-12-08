import { Checkbox, TextField, Typography } from "@mui/material";

import React from "react";

const Attributes = () => {
  return (
    <>
      <Typography className="text-color">Attributes</Typography>
      <div className="d-flex align-items-center my-2">
        <Checkbox
          size="small"
          sx={{
            "&.Mui-checked": {
              color: "#8B50F8", // Custom checked color
            },
          }}
        />
        <Typography className="text-color">Fragile Product</Typography>
      </div>
      <div className="d-flex align-items-center my-2">
        <Checkbox
          size="small"
          sx={{
            "&.Mui-checked": {
              color: "#8B50F8", // Custom checked color
            },
          }}
        />
        <Typography className="text-color">Biodegradable</Typography>
      </div>
      <div className="d-flex align-items-center my-2">
        <Checkbox
          size="small"
          sx={{
            "&.Mui-checked": {
              color: "#8B50F8", // Custom checked color
            },
          }}
        />
        <div className="d-flex flex-column">
          <Typography className="text-color">Frozen Product</Typography>
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
            placeholder="40C"
          />
        </div>
      </div>
      <div className="d-flex align-items-center my-2">
        <Checkbox
          size="small"
          sx={{
            "&.Mui-checked": {
              color: "#8B50F8", // Custom checked color
            },
          }}
        />
        <div className="d-flex flex-column">
          <Typography className="text-color">Frozen Product</Typography>
          <TextField
            // type="date"
            placeholder="MM/DD/YYYY"
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
          />
        </div>
      </div>
    </>
  );
};

export default Attributes;
