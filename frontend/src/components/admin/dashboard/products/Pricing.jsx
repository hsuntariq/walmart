import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { IOSSwitch } from "./IOSSwitch";

const Pricing = ({
  product_base_price,
  product_discounted_price,
  handleChange,
  tax,
  in_stock,
}) => {
  return (
    <>
      <div className="card p-4 shadow my-2 border-0">
        <Typography variant="h6">Pricing</Typography>
        <TextField
          variant="outlined"
          label="Base Price"
          className="w-100 my-2"
          placeholder="Enter Base Price"
          name="product_base_price"
          value={product_base_price}
          onChange={handleChange}
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
        <TextField
          variant="outlined"
          label="Discounted Price"
          className="w-100 my-2"
          placeholder="$499"
          name="product_discounted_price"
          value={product_discounted_price}
          onChange={handleChange}
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
        <div className="d-flex align-items-center">
          <Checkbox
            name="tax"
            value={tax}
            onChange={handleChange}
            sx={{
              "&.Mui-checked": {
                color: "#8B50F8", // Custom checked color
              },
            }}
          />
          <Typography className="text-secondary">
            Charge tax on this product
          </Typography>
        </div>
        <div
          className="w-100 my-2"
          style={{ height: "1px", background: "lightgray" }}
        ></div>
        <div className="d-flex align-items-center justify-content-between">
          <Typography className="text-secondary">In Stock</Typography>
          <FormControlLabel
            control={
              <IOSSwitch
                name="in_stock"
                value={in_stock}
                onChange={handleChange}
                defaultChecked
              />
            }
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
