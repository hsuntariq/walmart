import { Typography } from "@mui/material";
import React from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";

const Projects = () => {
  return (
    <>
      <div className="card border-0 shadow p-4 1-00">
        <div className="d-flex my-2 justify-content-between w-100 align-items-center">
          <div className="d-flex align-items-center gap-2 w-100">
            <div
              className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
              style={{ background: "#E4F6D6", width: "40px", height: "40px" }}
            >
              <LuCircleDollarSign color="#56CA00" size={20} />
            </div>
          </div>
          <BsThreeDotsVertical />
        </div>
        <Typography variant="p" className="fw-bold">
          New Project
        </Typography>
        <div className="d-flex gap-3 align-items-center">
          <Typography variant="h3">862</Typography>
          <Typography variant="p" className="text-danger">
            -18%
          </Typography>
        </div>
        <Typography variant="p" className="text-secondary">
          Yearly Project
        </Typography>
      </div>
    </>
  );
};

export default Projects;
