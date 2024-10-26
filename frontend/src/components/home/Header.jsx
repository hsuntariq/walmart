import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.webp";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiGlobeAlt, BiHeart, BiLock, BiSearch } from "react-icons/bi";
import { Input, Typography } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaCartPlus,
  FaGrinHearts,
  FaList,
  FaMoneyBillWave,
  FaSearchLocation,
  FaUser,
} from "react-icons/fa";
import ItemPopUp from "./ItemPopUp";
import { VscListSelection } from "react-icons/vsc";
import Sidebar from "./Sidebar";
import ProfileImageModal from "./ProfileImageModal";
import PopUp from "./PopUp";

const Header = () => {
  const openSidebar = useRef();
  const openUnderlay = useRef();
  const [size, setSize] = useState(window.innerWidth);
  const [showLocation, setShowLocation] = useState(false);

  // get the user from the global state

  const { user } = useSelector((state) => state.user);

  // update the size of window

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // call on every render, and cleanup as well

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  // open the sidebar
  const handleSidebar = () => {
    openSidebar.current.style.transform = "translateX(0)";
    openUnderlay.current.style.transform = "translateX(0)";
  };

  return (
    <>
      {/* call sidebar */}
      {size <= 1024 && (
        <Sidebar openSidebar={openSidebar} openUnderlay={openUnderlay} />
      )}

      <nav className="d-flex text-white main-bg-color p-3 justify-content-around align-items-center">
        {size <= 1024 && (
          <div className="menu-logo" onClick={handleSidebar}>
            <VscListSelection size={25} />
          </div>
        )}

        <div className="logo">
          <img width={30} height={30} src={logo} alt="walmart logo" />
        </div>
        {size > 1024 && (
          <>
            <div className="items-delivered  position-relative">
              <div
                onClick={() => setShowLocation(true)}
                className="d-flex p-2 rounded-pill text-white gap-3"
                style={{ background: "#004f9a" }}
              >
                <img
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                  width={40}
                  height={40}
                  alt="items logo"
                />
                <div className="d-flex gap-1  align-items-center">
                  <div className="text-sm d-flex flex-column">
                    <Typography variant="p" className="fw-bold">
                      How do you want your items
                    </Typography>
                    <Typography variant="p">
                      Sacramento Supercenter 8915 GERB...
                    </Typography>
                  </div>
                  <RiArrowDropDownLine size={25} />
                </div>
              </div>

              {/* pop up to select address */}
              {showLocation && (
                <ItemPopUp top={8} setShowLocation={setShowLocation} />
              )}
            </div>
          </>
        )}

        <div className={`search ${size <= 1024 && "col-9"} col-xl-6`}>
          <div className="d-flex align-items-center bg-white p-2 rounded-pill w-100 ">
            <input
              placeholder={`${
                size > 1038
                  ? "Search everything in walmart and in store"
                  : "Search Walmart"
              }`}
              className="w-100 border-0 outline-0"
            />
            <div
              className="text-white rounded-circle p-1"
              style={{ background: "#004f9a" }}
            >
              <BiSearch size={25} className="" />
            </div>
          </div>
        </div>
        {size > 1024 && (
          <>
            <div className="reorder gap-1 d-flex align-items-center">
              <BiHeart />
              <div className="">
                <Typography className="text-sm" variant="p">
                  Reorder
                </Typography>
                <Typography className="text-sm fw-bold" variant="h6">
                  My Items
                </Typography>
              </div>
            </div>
            <div className="sign-in gap-1 d-flex align-items-center">
              {user ? (
                <PopUp />
              ) : (
                <>
                  <BiLock />
                  <Link
                    to="/register"
                    className="text-white text-decoration-none"
                  >
                    <Typography className="text-sm" variant="p">
                      Sign In
                    </Typography>
                    <Typography className="text-sm fw-bold" variant="h6">
                      Account
                    </Typography>
                  </Link>
                </>
              )}
            </div>
          </>
        )}
        <div className="cart d-flex flex-column justify-content-center align-items-center">
          <FaCartPlus size={25} />
          <Typography className="fw-bold">$0</Typography>
        </div>
      </nav>
      {size <= 1024 && (
        <>
          <div className="items-delivered main-bg-color border p-1 border-end-0 border-start-0 border-bottom-0  position-relative">
            <div
              onClick={() => setShowLocation(true)}
              className="d-flex  text-white gap-3"
            >
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                width={20}
                height={20}
                alt="items logo"
              />
              <div className="d-flex gap-1  align-items-center">
                <div className="text-sm d-flex gap-2">
                  <Typography variant="p" className="fw-bold">
                    How do you want your items <RiArrowDropDownLine size={25} />
                  </Typography>
                  |
                  <Typography variant="p">
                    <IoLocationOutline size={15} /> Sacramento Supercenter 8915
                    GERB...
                  </Typography>
                </div>
              </div>
            </div>

            {/* pop up to select address */}
            {showLocation && (
              <ItemPopUp top={13} setShowLocation={setShowLocation} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
