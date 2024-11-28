import { Typography } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import PieChart from "../charts/PieChart";
import { IoWalletOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const SalesOverView = () => {
  return (
    <>
      <div className="card p-4 border-0 shadow">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex w-100 flex-column">
            <Typography variant="h6">Sales Overview</Typography>
          </div>
          <BsThreeDotsVertical />
        </div>
        <div className="d-flex align-items-center w-100">
          <PieChart />
          <div className="d-flex w-100 flex-column">
            <div className="d-flex w-100 gap-2 align-items-center">
              <div
                className="t-icon p-2 rounded-3 d-flex justify-content-center align-items-center"
                style={{ background: "#EDE4FF", width: "40px", height: "40px" }}
              >
                <IoWalletOutline color="#8C57FF" size={20} />
              </div>
              <div className="d-flex flex-column">
                <Typography className="text-secondary text-sm">
                  Number of Sales
                </Typography>
                <Typography className="" variant="h6">
                  $86,400
                </Typography>
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <div className="d-flex flex-column">
                  <div className="">
                    <div className="d-flex gap-1 align-items-center">
                      <GoDotFill color="#8C57FF" />{" "}
                      <Typography color="rgb(46, 38, 61)">Apparel</Typography>
                    </div>
                    <Typography>$12,150</Typography>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <div className="">
                    <div className="d-flex gap-1 align-items-center">
                      <GoDotFill color="#8C57FF" />{" "}
                      <Typography color="rgb(46, 38, 61)">Apparel</Typography>
                    </div>
                    <Typography>$12,150</Typography>
                  </div>
                </div>
              </div>
              <div className="col-6 my-2">
                <div className="d-flex flex-column">
                  <div className="">
                    <div className="d-flex gap-1 align-items-center">
                      <GoDotFill color="#8C57FF" />{" "}
                      <Typography color="rgb(46, 38, 61)">Apparel</Typography>
                    </div>
                    <Typography>$12,150</Typography>
                  </div>
                </div>
              </div>
              <div className="col-6 my-2">
                <div className="d-flex flex-column">
                  <div className="">
                    <div className="d-flex gap-1 align-items-center">
                      <GoDotFill color="#8C57FF" />{" "}
                      <Typography color="rgb(46, 38, 61)">Apparel</Typography>
                    </div>
                    <Typography>$12,150</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesOverView;
