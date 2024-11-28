import { Typography } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import LineChart from "../charts/LineChart";
import LineChart2 from "./LineChart2";

const SalesChart = () => {
  return (
    <>
      <div className="card border-0 p-4 shadow my-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Typography variant="h6">45.6K</Typography>
          </div>
          <BsThreeDotsVertical />
        </div>
        <LineChart2 />
      </div>
    </>
  );
};

export default SalesChart;
