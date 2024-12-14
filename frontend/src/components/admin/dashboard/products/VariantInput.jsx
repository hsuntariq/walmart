import React from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";

const VariantInput = ({ id, count, setCount, handleChange }) => {
  const removeVariantInput = (id) => {
    const newCount = count.filter((item) => item.id !== id);
    setCount(newCount);
  };

  return (
    <div className="d-flex mb-1 align-items-center gap-2">
      {/* Variant Type */}
      <TextField
        variant="outlined"
        label="Select Variant"
        select
        className="w-25 my-2"
        name="type"
        onChange={(e) => handleChange(id, e)}
        value={count.find((item) => item.id === id)?.type || ""}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#8B50F8",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#8B50F8",
            },
          },
        }}
      >
        <MenuItem value="size">Size</MenuItem>
        <MenuItem value="weight">Weight</MenuItem>
        <MenuItem value="color">Color</MenuItem>
        <MenuItem value="smell">Smell</MenuItem>
      </TextField>

      {/* Variant Value */}
      <TextField
        variant="outlined"
        label="Variant Value"
        className="w-100 my-2"
        name="variant"
        placeholder="Enter Variant Value"
        onChange={(e) => handleChange(id, e)}
        value={count.find((item) => item.id === id)?.variant || ""}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#8B50F8",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#8B50F8",
            },
          },
        }}
      />

      {/* Remove Button */}
      <IconButton onClick={() => removeVariantInput(id)}>
        <IoClose />
      </IconButton>
    </div>
  );
};

export default VariantInput;
