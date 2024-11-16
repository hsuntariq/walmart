import React from "react";
import { Card } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { Typography } from "@mui/material";
import { IoLanguageSharp } from "react-icons/io5";
import { GoSun, GoBell } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";

const MainContentHeader = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BiSearch />
          <Typography>Search</Typography>
        </div>
        <div className="d-flex align-items-center gap-2">
          <IoLanguageSharp size={25} />
          <GoSun size={25} />
          <FaRegStar size={25} />
          <GoBell size={25} />
          <img
            src="/icons/1.png"
            width={35}
            height={35}
            alt="user image"
            className="rounded-circle"
          />
        </div>
      </div>
    </>
  );
};

export default MainContentHeader;
