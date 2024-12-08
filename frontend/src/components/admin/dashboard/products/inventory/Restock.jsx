import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { BiCheck } from "react-icons/bi";
const Restock = () => {
  return (
    <>
      <Typography className="text-color">Options</Typography>
      <div className="d-flex gap-2 w-100  align-items-center">
        <TextField
          placeholder="100"
          className="w-100"
          label="Add to stock"
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
        />
        <Button sx={{ background: "#8B50F8", color: "white" }}>
          <BiCheck /> Confirm
        </Button>
      </div>

      <Typography className="text-color my-3">
        Product in stock now: 54
      </Typography>
      <Typography className="text-color my-3">
        Product in transit: 390
      </Typography>
      <Typography className="text-color my-3">
        Last time restocked: 24th June, 2022
      </Typography>
      <Typography className="text-color my-3">
        Total stock over lifetime: 2,430
      </Typography>
    </>
  );
};

export default Restock;
