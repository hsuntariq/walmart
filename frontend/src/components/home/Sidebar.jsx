import React from "react";
import logo from "../../assets/images/logo.webp";
import { Button } from "@mui/material";
import { IoReceiptOutline } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
import { BsBox2Heart, BsChat } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="height-100 col-lg-4 col-sm-5 p-3  position-fixed top-0 start-0 z-3 bg-white shadow">
      <div className="d-flex justify-content-center gap-2">
        <img src={logo} alt="logo" width={30} />
        <Button
          variant="contained"
          size="small"
          className="rounded-pill text-sm-extra"
        >
          Sign In or create an account
        </Button>
      </div>

      <ul className="d-flex text-sm-mid text-secondary flex-column list-unstyled gap-3 mt-5">
        <li className="d-flex gap-3 align-items-center">
          <img
            width={20}
            src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg"
            alt="logo"
          />
          <p className="m-0">Walmart</p>
        </li>
        <hr />
        <li className="d-flex gap-3 align-items-center">
          <IoReceiptOutline />
          <p className="m-0">Purchase History</p>
        </li>
        <li className="d-flex gap-3 align-items-center">
          <BsBox2Heart />
          <p className="m-0">My Items</p>
        </li>
        <li className="d-flex gap-3 align-items-center">
          <BiLock />
          <p className="m-0">Account</p>
        </li>
        <hr />
        <li className="d-flex gap-3 align-items-center">
          <IoIosHelpCircleOutline />
          <p className="m-0">Help</p>
        </li>
        <hr />
        <li className="d-flex gap-3 align-items-center">
          <IoIosHelpCircleOutline />
          <p className="m-0">Departments</p>
        </li>
        <li className="d-flex gap-3 align-items-center">
          <MdOutlineSpaceDashboard />
          <p className="m-0">Services</p>
        </li>
        <hr />
        <li className="d-flex gap-3 align-items-center">
          <BsChat />
          <p className="m-0">Give feedback</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
