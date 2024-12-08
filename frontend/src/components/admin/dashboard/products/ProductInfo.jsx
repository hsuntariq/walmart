import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";

const ProductInfo = ({
  product_name,
  product_barcode,
  product_sku,
  product_description,
  handleChange,
  value,
  setValue,
}) => {
  // const [value, setValue] = useState(
  //   "Keep your account secure with authentication step."
  // );

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Text formatting options
      [{ align: [] }], // Alignment options
    ],
  };
  return (
    <>
      <div className="card p-4 shadow my-2 border-0">
        <Typography variant="h6" className="mb-2">
          Product Information
        </Typography>
        <TextField
          variant="outlined"
          label="Product Name"
          className="w-100 mb-3"
          placeholder="IPhone 14"
          name="product_name"
          value={product_name}
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
        <div className="d-flex gap-3">
          <TextField
            variant="outlined"
            label="Barcode"
            className="w-100"
            placeholder="031245421"
            name="product_barcode"
            value={product_barcode}
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
            label="SKU"
            className="w-100"
            placeholder="FXSK100U"
            name="product_sku"
            value={product_sku}
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
        </div>
        <Typography className="text-secondary mt-2 mb-1">
          Description(optional)
        </Typography>
        <div>
          <ReactQuill
            value={value}
            onChange={setValue}
            modules={modules}
            placeholder="Write something here..."
            theme="snow" // Use the Snow theme for styling
          />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
