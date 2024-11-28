import { Typography } from "@mui/material";
import React from "react";
import { FaChartPie, FaUser } from "react-icons/fa";

const TransactionCard = () => {
  return (
    <>
      <div className="card p-4 border-0 shadow">
        <Typography variant="h5">Transactions</Typography>
        <Typography>
          <span className="fw-semibold">Total 48.5% Growth</span> 😎{" "}
          <span className="text-secondary">this month</span>{" "}
        </Typography>
        <div className="d-flex my-3 justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
              style={{ background: "#8C57FF", width: "40px", height: "40px" }}
            >
              <FaChartPie color="white" size={20} />
            </div>
            <div className="d-flex flex-column">
              <Typography className="text-secondary">Sales</Typography>
              <Typography variant="h6">245K</Typography>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
              style={{ background: "#56CA00", width: "40px", height: "40px" }}
            >
              <FaUser color="white" size={20} />
            </div>
            <div className="d-flex flex-column">
              <Typography className="text-secondary">Users</Typography>
              <Typography variant="h6">12.5k</Typography>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
              style={{ background: "#FFB400", width: "40px", height: "40px" }}
            >
              <FaChartPie color="white" size={20} />
            </div>
            <div className="d-flex flex-column">
              <Typography className="text-secondary">Products</Typography>
              <Typography variant="h6">1.54K</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
