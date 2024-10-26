import React, { useRef } from "react";
import logo from "../../assets/images/logo.webp";
import { Button } from "@mui/material";
import { IoReceiptOutline } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
import { BsBox2Heart, BsChat } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Departments from "./Departments";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

const Sidebar = ({ openSidebar, openUnderlay }) => {
  const { user } = useSelector((state) => state.user);
  const dep = useRef();
  const handleDepartments = () => {
    dep.current.style.transform = "translate(0)";
    dep.current.classList.remove("opacity-0");
  };

  const closeSidebar = () => {
    openSidebar.current.style.transform = "translateX(-100%)";
    openUnderlay.current.style.transform = "translateX(-100%)";
  };

  return (
    <>
      <div
        onClick={closeSidebar}
        ref={openUnderlay}
        className="height-100 sidebar-underlay  width-100 start-0  position-fixed top-0 white-opacity z-3"
      ></div>
      <div
        ref={openSidebar}
        className="height-100 sidebar col-lg-4 overflow-hidden col-sm-5 p-3  position-fixed top-0 start-0 z-3 bg-white shadow"
      >
        <div className="d-flex justify-content-center gap-2">
          <img src={logo} alt="logo" width={30} />
          {user ? (
            <>
              <Button
                variant="contained"
                size="small"
                className="rounded-pill text-sm-extra"
              >
                {user?.image ? (
                  <>
                    <div className="d-flex gap-3">
                      <img
                        src={user?.image}
                        width={40}
                        height={40}
                        className="rounded-circle"
                      />
                      {user?.username}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex gap-2">
                      <FaUser size={15} className="rounded-circle" />
                      {user?.username}
                    </div>
                  </>
                )}{" "}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                size="small"
                className="rounded-pill text-sm-extra"
              >
                Sign In or create an account
              </Button>
            </>
          )}
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
          <li
            onClick={handleDepartments}
            className="d-flex gap-3 align-items-center"
          >
            <IoIosHelpCircleOutline />
            <p className="m-0">Departments</p>
          </li>
          <li
            onClick={handleDepartments}
            className="d-flex gap-3 align-items-center"
          >
            <MdOutlineSpaceDashboard />
            <p className="m-0">Services</p>
          </li>
          <hr />
          <li className="d-flex gap-3 align-items-center">
            <BsChat />
            <p className="m-0">Give feedback</p>
          </li>
        </ul>

        <Departments dep={dep} />
      </div>
    </>
  );
};

export default Sidebar;
