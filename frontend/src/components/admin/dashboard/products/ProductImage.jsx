import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

const ProductImage = ({ formFields, setFormFields }) => {
  const [images, setImages] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // console.log(acceptedFiles); // Handle uploaded files here
      //   setImages((prevImages) => [...prevImages, ...acceptedFiles]);
      setImages((prevValue) => [...prevValue, ...acceptedFiles]);
    },
    accept: { "image/*": [] },
  });

  const removeSingleImage = (id) => {
    const newImages = images?.filter((item, index) => {
      return item?.lastModified !== id;
    });
    setImages(newImages);
  };

  const handleImageUpload = async () => {
    try {
      setImageLoading(true);
      const imagesURL = images?.map(async (item, index) => {
        const data = new FormData();
        data.append("file", item);
        data.append("upload_preset", "ls8frk5v");
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload",
          data
        );
        setImageLoading(false);
        setImages([]);
        return response.data.url;
      });

      // wait for all the promises to be resolved
      const myImages = await Promise.all(imagesURL);

      setFormFields({
        ...formFields,
        product_images: [...formFields.product_images, ...myImages],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card p-4 shadow my-2 border-0">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Typography variant="h6">Product Image</Typography>
        <Typography
          variant="h6"
          className="fw-normal"
          sx={{
            // mt: 2,
            textAlign: "right",
            color: "#8B50F8",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "1rem",
          }}
          onClick={() => alert("Add media from URL clicked!")}
        >
          Add media from URL
        </Typography>
      </div>
      <Box
        sx={{
          border: "2px dashed #E6E5E7", // Dashed border style
          borderRadius: "8px", // Rounded corners
          padding: "40px", // Spacing inside the box
          textAlign: "center", // Center-align text
          backgroundColor: isDragActive ? "#f7f7f7" : "#fff",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#E8E8E8",
              margin: "0 auto", // Center the icon
            }}
          >
            <Box
              component="img"
              src="/icons/upload.png"
              alt="Upload Icon"
              sx={{ width: "24px" }}
            />
          </Box>
        </Box>
        <Typography variant="h6" sx={{ color: "#6C6C6C", mb: 1 }}>
          Drag and Drop Your Image Here
        </Typography>
        <Typography variant="body2" sx={{ color: "#9E9E9E", mb: 2 }}>
          or
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#8B50F8",
            borderColor: "#8B50F8",
            "&:hover": { backgroundColor: "#f2e7fe", borderColor: "#8B50F8" },
          }}
        >
          Browse Image
        </Button>
      </Box>
      {/* loop to show selected image */}

      {images && (
        <>
          {images?.map((item, index) => {
            //   console.log({ ...item.name });
            return (
              <>
                <div className="d-flex justify-content-between my-2 p-3 border rounded-2">
                  <div className="d-flex align-items-center gap-2">
                    <Box
                      component="img"
                      src={URL?.createObjectURL(item)}
                      alt="selected image"
                      className="border rounded-2 p-1"
                      sx={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="d-flex flex-column">
                      <Typography variant="p">{item.name}</Typography>
                    </div>
                  </div>
                  <IconButton
                    onClick={() => removeSingleImage(item?.lastModified)}
                  >
                    <IoCloseOutline color="gray" />
                  </IconButton>
                </div>
              </>
            );
          })}
        </>
      )}
      {images.length > 0 && (
        <div className="d-flex mt-3 justify-content-end gap-3">
          <Button
            onClick={() => setImages([])}
            variant="outlined"
            sx={{ border: "1px solid red", color: "red", fontWeight: "400" }}
            size="small"
          >
            Remove All
          </Button>
          <Button
            disabled={imageLoading}
            onClick={handleImageUpload}
            size="small"
            variant="contained"
            className={`${imageLoading && "btn-secondary"}`}
            sx={{ background: "#8C57FF", fontWeight: "400" }}
          >
            {imageLoading ? (
              <>
                <ThreeCircles height={25} width={25} color="white" />
              </>
            ) : (
              "Upload Files"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
