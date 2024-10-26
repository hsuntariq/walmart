import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { FaDashcube, FaPowerOff, FaUser, FaWallet } from "react-icons/fa";
import ProfileImageModal from "./ProfileImageModal";
import { BiSolidShoppingBag } from "react-icons/bi";

export default function PopUp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { user } = useSelector((state) => state.user);

  const handleModalOpen = () => {
    // Close the popover first, then open the modal
    handleClose();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div
        aria-describedby={id}
        onClick={handleClick}
        className="d-flex align-items-center cursor-pointer"
      >
        {user?.image ? (
          <img
            src={user?.image}
            width={40}
            height={40}
            className="rounded-circle"
          />
        ) : (
          <FaUser size={35} className="rounded-circle" />
        )}
        <div className="text-white text-decoration-none">
          <Typography className="text-sm m-0" variant="p">
            Salam
          </Typography>
          <Typography
            className="text-sm m-0 fw-bold text-capitalize"
            variant="h6"
          >
            {user?.f_name}
          </Typography>
        </div>
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div
          style={{ background: "#4E3624", width: "300px" }}
          className="shadow"
        >
          <div className="card bg-transparent w-100 border-0 shadow">
            <div
              className="card-header text-center w-100 p-4"
              style={{ background: "#4E3624" }}
            >
              <Typography
                variant="body1"
                className="text-center mx-auto text-white fw-semibold text-sm text-uppercase"
              >
                {`${user?.f_name} ${user?.l_name}`}
              </Typography>
            </div>
            <div className="card-body bg-light">
              <ul className="list-unstyled d-flex justify-content-center fw-semibold text-start flex-column gap-3 ">
                <li className="d-flex gap-2 align-items-center">
                  <FaDashcube />
                  <Typography class="">Dashboard</Typography>
                </li>
                <li
                  className="d-flex gap-2 align-items-center"
                  onClick={handleModalOpen}
                >
                  <FaUser />
                  <Typography>Upload Profile Image</Typography>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <BiSolidShoppingBag />
                  <Typography class="">Orders </Typography>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <FaWallet />
                  <Typography class="">Wallet </Typography>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <FaPowerOff />
                  <Typography class="">Logout </Typography>
                </li>

                {/* Other list items */}
              </ul>
            </div>
          </div>
        </div>
      </Popover>

      {/* Profile Image Modal */}
      <ProfileImageModal open={modalOpen} handleClose={handleModalClose} />
    </div>
  );
}
