import React from "react";
import MainContentHeader from "./MainContentHeader";
import { Typography } from "@mui/material";

const MainContent = () => {
  return (
    <>
      <div className="p-5">
        <MainContentHeader />
        <div className="row">
          <div className="col-lg-3">
            <div className="card position-relative p-3 shadow border-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column gap-2">
                  <Typography>Ratings</Typography>
                  <div className="d-flex">
                    <Typography>13k</Typography>
                    <Typography>+15.6%</Typography>
                  </div>
                  <div
                    className="rounded-pill px-2 py-0"
                    style={{ background: "#EDE4FF" }}
                  >
                    Year of {new Date().getFullYear()}
                  </div>
                </div>
                <div className="rating image">
                  <img
                    src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/illustrations/characters/9.png"
                    alt="Rating image"
                    width={"100px"}
                    className="position-absolute"
                    style={{
                      top: "-30%",
                      right: "0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
