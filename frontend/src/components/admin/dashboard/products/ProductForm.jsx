import React, { useState } from "react";
import MainContentHeader from "../main_content/MainContentHeader";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import './product.css'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill theme CSS
const ProductForm = () => {
     const [value, setValue] = useState("Keep your account secure with authentication step.");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Text formatting options
      [{ align: [] }], // Alignment options
    ],
  };
  return (
    <>
      <div className="p-xl-5 p-3">
        <MainContentHeader />

        <div className="d-flex my-4 justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Typography variant="h5">Add a new product</Typography>
            <Typography variant="p" className="text-secondary">
              Orders placed across your store
            </Typography>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Button variant="outlined">Discard</Button>
            <Button
              variant="outlined"
              style={{ borderColor: "#8C57FF", color: "#8C57FF" }}
            >
              Save Draft
            </Button>
            <Button variant="contained" style={{ background: "#8C57FF" }}>
              Publish Product
            </Button>
          </div>
        </div>

        {/* form */}

        <div className="row">
          <div className="col-xl-8 col-lg-9">
            <div className="card p-4 shadow my-2 border-0">
              <Typography variant="h6" className="mb-2">
                Product Information
              </Typography>
              <TextField
                variant="outlined"
                label="Product Name"
                className="w-100 mb-3"
                placeholder="IPhone 14"
                name="sku"
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
                  name="barcode"
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
                  name="sku"
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
              <Typography className="text-secondary">
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
          </div>
          <div className="col-xl-4 col-lg-3">
            <div className="p-4 card shadow border-0">
                <Typography variant="h6">
                    Pricing
                </Typography>
                <TextField
                  variant="outlined"
                  label="Base Price"
                  className="w-100 my-2"
                  placeholder="Enter Base Price"
                  name="sku"
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
                  name="sku"
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
                    <Checkbox  sx={{color:'#8B50F8'}}  />
                    <Typography className="text-secondary">
                        Charge tax on this product
                    </Typography>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
