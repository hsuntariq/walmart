import { Button, Typography } from "@mui/material";
import React from "react";
import { GoDotFill } from "react-icons/go";

const ActivityCard = () => {
  return (
    <>
      <div className="card p-4 border-0 shadow" style={{ height: "100%" }}>
        <Typography variant="h6">Activity Timeline</Typography>
        <div className="d-flex py-3 px-0">
          <div className="d-flex gap-2  flex-column justify-content-center align-items-center">
            <GoDotFill size={"35px"} color="#8C57FF" />
            <div className="line-height"></div>
          </div>
          <div className="d-flex flex-column w-100 gap-1">
            <div className="d-flex justify-content-between align-items-center">
              <Typography variant="h5 " className="text-sm m-0 fw-bold">
                12 Invoices have been paid
              </Typography>
              <Typography variant="p" className="text-sm text-secondary">
                12 min ago
              </Typography>
            </div>
            <Typography variant="p" className="text-md text-secondary">
              Invoices have been paid to the company
            </Typography>
            <Button className="rounded-pill align-self-start bg-light">
              invoices.png
            </Button>
          </div>
        </div>
        <div className="d-flex py-3 px-0">
          <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
            <GoDotFill size={"35px"} color="#56CA00" />
            <div className="line-height"></div>
          </div>
          <div className="d-flex flex-column w-100 gap-1">
            <div className="d-flex justify-content-between align-items-center">
              <Typography variant="h5 " className="text-sm m-0 fw-bold">
                Client Meeting
              </Typography>
              <Typography variant="p" className="text-sm text-secondary">
                45 min ago
              </Typography>
            </div>
            <Typography variant="p" className="text-md text-secondary">
              Project meeting with john @10:15am
            </Typography>
            <div className="d-flex gap-2 align-items-center">
              <img
                src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png"
                width={40}
                height={40}
                className="rounded-circle"
                alt=""
              />
              <div className="d-flex flex-column gap-1">
                <Typography className="text-sm text-secondary fw-medium">
                  Lester McCarthy (Client)
                </Typography>
                <Typography className="text-sm text-secondary">
                  CEO of ThemeSelection
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex py-3 px-0">
          <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
            <GoDotFill size={"35px"} color="#16B1FF" />
            <div className="line-height"></div>
          </div>
          <div className="d-flex flex-column w-100 gap-1">
            <div className="d-flex justify-content-between align-items-center">
              <Typography variant="h5 " className="text-sm m-0 fw-bold">
                Create a new project for client
              </Typography>
              <Typography variant="p" className="text-sm text-secondary">
                2 Days Ago
              </Typography>
            </div>
            <Typography variant="p" className="text-md text-secondary">
              6 team members in a project
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
