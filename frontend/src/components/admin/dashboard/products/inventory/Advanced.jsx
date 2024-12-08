import { MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const Advanced = () => {
  return (
    <>
      <Typography className="text-color">Advanced</Typography>
      <div className="row">
        <div className="col-sm-8">
          <TextField
            select
            label="Product ID type"
            size="small"
            className="w-100"
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
          >
            <MenuItem defaultChecked value="ISBN">
              ISBN
            </MenuItem>
            <MenuItem value="UPC">UPC</MenuItem>
            <MenuItem value="EAN">EAN</MenuItem>
            <MenuItem value="JAN">JAN</MenuItem>
          </TextField>
        </div>
        <div className="col-sm-4">
          <TextField
            size="small"
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
            label="Product ID"
            placeholder="103857"
          />
        </div>
      </div>
    </>
  );
};

export default Advanced;
