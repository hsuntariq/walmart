import { Typography } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import LineChart from "../charts/LineChart";
import Weekly from "../charts/Weekly";
import { FaChartPie } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";

const WeeklySales = () => {
  return (
    <>
      <div className="card border-0 p-4 shadow my-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Typography variant="h6">Total Sales</Typography>
            <Typography className="text-secondary text-sm">$21,845</Typography>
          </div>
          <BsThreeDotsVertical />
        </div>
        <Weekly />
        <div className="d-flex justify-content-around align-items-center">
          <div className="d-flex align-items-center gap-2">
            <div
              className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
              style={{ background: "#8C57FF", width: "40px", height: "40px" }}
            >
              <FaChartPie color="white" size={20} />
            </div>
            <div className="d-flex flex-column">
              <Typography className="text-secondary">Sales</Typography>
              <Typography variant="p" className="text-sm text-secondary">
                245K
              </Typography>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center gap-2">
              <div
                className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
                style={{ background: "#E4F6D6", width: "40px", height: "40px" }}
              >
                <LuCircleDollarSign color="#56CA00" size={20} />
              </div>
              <div className="d-flex flex-column">
                <Typography className="text-secondary">482K</Typography>
                <Typography variant="p" className="text-sm text-secondary">
                  Total Profit
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklySales;
