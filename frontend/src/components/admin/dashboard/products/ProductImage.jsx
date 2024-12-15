import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
const ProductImage = ({
  product_images,
  handleChange,
  formFields,
  setFormFields,
}) => {
  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
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

  useEffect(() => {
    setFormFields({ ...formFields, product_images: imagesURL });
  }, [imagesURL]);

  const uploadImage = async () => {
    const myImages = images.map(async (item, index) => {
      const data = new FormData();
      data.append("file", item);
      data.append("upload_preset", "ls8frk5v");

      return await axios
        .post("https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload", data)
        .then((response) => response?.data?.url);
    });

    const urls = await Promise.all(myImages);

    setImagesURL(urls);
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
        <input name="product_images" {...getInputProps()} />
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
            onClick={uploadImage}
            size="small"
            variant="contained"
            sx={{ background: "#8C57FF", fontWeight: "400" }}
          >
            Upload Files
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
