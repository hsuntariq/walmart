import React from "react";
import MainContentHeader from "./MainContentHeader";
import { Typography } from "@mui/material";
import RatingCard from "../cards/RatingCard";
import SessionCard from "../cards/SessionCard";
import TransactionCard from "../cards/TransactionCard";
import SalesChart from "../cards/SalesChart";
import RevenueChart from "../cards/RevenueChart";
import SalesOverView from "../cards/SalesOverView";
import ActivityCard from "../cards/ActivityCard";
import WeeklySales from "../cards/WeeklySales";
import TotalSales from "../cards/TotalSales";
import Projects from "../cards/Projects";
import Dashboard from "../../../../pages/admin/dashboard/Dashboard";
const MainContent = () => {
  return (
    <>
      <div className="p-5">
        <MainContentHeader />
        <div className="row py-5 align-items-end">
          <div className="col-lg-3">
            <RatingCard />
          </div>
          <div className="col-lg-3">
            <SessionCard />
          </div>
          <div className="col-lg-6">
            <TransactionCard />
          </div>
          <div className="col-lg-3">
            <SalesChart />
          </div>
          <div className="col-lg-3">
            <RevenueChart />
          </div>
          <div className="col-lg-6">
            <SalesOverView />
          </div>
          <div className="col-lg-6" style={{ height: "100%" }}>
            <ActivityCard />
          </div>
          <div className="col-lg-4">
            <WeeklySales />
          </div>
          <div className="col-lg-2">
            <TotalSales />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
