import { Typography } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";

const RevenueChart = () => {
  return (
    <>
      <div className="card border-0 p-4 shadow my-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Typography variant="h6">Revenue Report</Typography>
          </div>
          <BsThreeDotsVertical />
        </div>
        <BarChart />
      </div>
    </>
  );
};

export default RevenueChart;
