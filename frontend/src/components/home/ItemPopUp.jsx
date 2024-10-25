import { Button, Typography } from "@mui/material";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const ItemPopUp = ({ setShowLocation, top }) => {
  return (
    <div
      onClick={(e) =>
        e.target.classList.contains("parent-underlay")
          ? setShowLocation(false)
          : setShowLocation(true)
      }
      className="height-100 width-100 text-sm parent-underlay bg-black-opacity position-fixed top-0 start-0"
      style={{ zIndex: "333" }}
    >
      <div
        className="items-delivered-popup rounded-2 mt-2  p-3 position-absolute main-bg-color"
        style={{
          top: `${top}%`,
          left: "6%",
        }}
      >
        <div className="d-flex justify-content-between">
          <div className="pop-icon">
            <div
              className="delivery-method p-2 rounded-circle"
              style={{ background: "#d3eff8" }}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-truck-icon-download-in-svg-png-gif-file-formats--back-city-basic-icons-pack-industry-449926.png?f=webp&w=256"
                alt="deleivery logo"
                width={40}
                height={40}
              />
            </div>
            <Typography variant="h6" className="fw-bold text-sm text-center">
              Shipping
            </Typography>
          </div>
          <div className="pop-icon">
            <div
              className="delivery-method p-2 rounded-circle"
              style={{ background: "#d3eff8" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/8571/8571659.png"
                alt="deleivery logo"
                width={40}
                height={40}
              />
            </div>
            <Typography variant="h6" className="fw-bold text-sm text-center">
              Pickup
            </Typography>
          </div>
          <div className="pop-icon">
            <div
              className="delivery-method p-2 rounded-circle"
              style={{ background: "#d3eff8" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/5654/5654409.png"
                alt="deleivery logo"
                width={40}
                height={40}
              />
            </div>
            <Typography variant="h6" className="fw-bold text-sm text-center">
              Delivery
            </Typography>
          </div>
        </div>

        <div className="rounded-3 my-3 bg-light p-3 text-dark">
          <div className="d-flex gap-2">
            <FaLocationArrow size={10} />
            <div className="d-flex flex-column ">
              <Typography variant="p" className="fw-semibold text-sm">
                Add an address for shipping and delivery
              </Typography>
              <Typography variant="p" className=" text-sm">
                Sacramento, CA 95829
              </Typography>
              <Button
                variant="contained"
                size="small"
                className="rounded-pill my-2"
              >
                Add address
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPopUp;
