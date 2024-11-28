import { Typography } from "@mui/material";
import React from "react";

const RatingCard = () => {
  return (
    <>
      <div className="card position-relative p-4 shadow border-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column gap-2">
            <Typography className="fw-bold">Ratings</Typography>
            <div className="d-flex gap-2 mt-2 align-items-center">
              <Typography variant="h5">13k</Typography>
              <Typography className="text-success fw-semibold">
                +15.6%
              </Typography>
            </div>
            <div
              className="rounded-pill px-2 py-0"
              style={{ background: "#EDE4FF" }}
            >
              <Typography
                className="text-sm fw-semibold"
                style={{ color: "#8C57FF" }}
              >
                Year of {new Date().getFullYear()}
              </Typography>
            </div>
          </div>
          <div className="rating image">
            <img
              src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/characters/9.png"
              alt="Rating image"
              width={"120px"}
              height={"200px"}
              className="position-absolute"
              style={{
                top: "-35%",
                right: "0",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingCard;
