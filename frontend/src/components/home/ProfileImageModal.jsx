import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";
const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children)}
    </animated.div>
  );
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function ProfileImageModal({ open, handleClose }) {
  const [imagePreview, setImagePreview] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [imageLoading, setImageLoading] = React.useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    setImage(file);
  };

  const imageUploadCloud = async (e) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ls8frk5v");

    // request the cloudinary api

    try {
      setImageLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload",
        data
      );
      setImageLoading(false);
      setImagePreview(null);
      setImage(null);
      toast.success("Image Uploaded Successfully!");
      handleClose();
      return response.data.url;
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleImageUpload = async (e) => {
    const imageData = await imageUploadCloud(image);
  };

  return (
    <Modal
      open={open}
      onClose={(e) => {
        e.stopPropagation(); // Prevents closing popover
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box onClick={(e) => e.stopPropagation()} sx={style}>
          <Typography variant="h6">Upload Profile Picture</Typography>
          <div
            className="position-relative mx-auto"
            style={{ width: "400px", height: "400px" }}
          >
            <img
              src={
                imagePreview ||
                "https://as1.ftcdn.net/v2/jpg/01/05/37/86/1000_F_105378668_ufyqINGr5JMHyVElyfpdrK28flQ2YiTJ.jpg"
              }
              className="rounded-circle shadow object-fit-cover"
              width={400}
              height={400}
            />
            <input
              type="file"
              name="image"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "-40px",
                opacity: 0,
              }}
              onChange={handleImageChange}
            />
            <FaPlus
              className="position-absolute bottom-0 end-0"
              size={35}
              cursor="pointer"
              style={{ zIndex: "-4" }}
            />
          </div>
          <Button
            disabled={imageLoading}
            onClick={handleImageUpload}
            variant="contained"
            className={`${imageLoading && "btn-disabled"}`}
            style={{ marginTop: "20px" }}
          >
            {imageLoading ? (
              <>
                <ThreeCircles
                  visible={true}
                  height="30"
                  width="30"
                  color="white"
                  ariaLabel="three-circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                Uploding...
              </>
            ) : (
              "Upload Image"
            )}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
