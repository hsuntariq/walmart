import React, { useRef, useState } from "react";
import { FormCheck } from "react-bootstrap";
import logo from "../../../assets/images/logo.webp";
import { adminSidebarData } from "../data/adminSidebarData";
import { Typography } from "@mui/material";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdBloodtype, MdOutlineChevronRight } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";

const AdminSidebar = () => {
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);
  const [active, setActive] = useState(null);
  const [active2, setActive2] = useState(null);
  const dropRef = useRef();
  // const handleDropDown = () => {
  //   dropRef.current.classList.toggle("height-0");
  // };

  const handleDropOpen = (index) => {
    setOpen(open == index ? null : index);
  };
  const handleDropOpen2 = (index) => {
    setOpen2(open2 == index ? null : index);
    console.log(index);
  };
  const handleActive = (index) => {
    setActive(index);
  };
  const handleActive2 = (index) => {
    setActive2(index);
  };

  return (
    <>
      <section className="height-100 ps-0 admin-sidebar overflow-y-scroll">
        <div className="d-flex pt-5 ps-4  justify-content-between align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png"
            width={100}
            alt="logo"
          />
          <FormCheck />
        </div>
        <ul className="list-unstyled d-flex gap-2 flex-column">
          <>
            {adminSidebarData?.map((item, index) => {
              return item?.map((item2, index2) => {
                return (
                  <>
                    <div className=" ">
                      <li
                        className={`d-flex  ps-4 align-items-center justify-content-between ${
                          active == item2.id && "active-list"
                        } `}
                        key={item2?.id}
                        onClick={() => handleActive(item2?.id)}
                      >
                        <div className="d-flex gap-1 align-items-center">
                          <img
                            src={item2?.image}
                            width={20}
                            alt="sidebar icon"
                          />
                          <Typography>{item2?.text}</Typography>
                        </div>
                        {item2?.list && (
                          <>
                            <MdOutlineChevronRight
                              style={{
                                transform: `${
                                  open == item2.id
                                    ? "rotate(90deg)"
                                    : "rotate(0)"
                                }`,
                                transition: "all 0.2s",
                              }}
                              onClick={() => handleDropOpen(item2?.id)}
                              size={20}
                            />
                          </>
                        )}
                      </li>
                      <ul
                        // ref={dropRef}
                        className={` ${
                          open == item2?.id ? "height-auto" : "height-0"
                        } list-unstyled ms-4 text-capitalize d-flex flex-column gap-2`}
                      >
                        {item2?.list?.map((item3, index3) => {
                          return (
                            <>
                              <div className="">
                                <li
                                  onClick={() => handleActive2(item3?.id)}
                                  className={`d-flex justify-content-between align-items-center ${
                                    active2 == item3.id && "active-list"
                                  }  `}
                                >
                                  <div className="d-flex align-items-center gap-1">
                                    <GoDot />
                                    <Typography key={item3?.id}>
                                      {item3?.text}
                                    </Typography>
                                  </div>
                                  {item3?.list2 && (
                                    <>
                                      <MdOutlineChevronRight
                                        style={{
                                          transform: `${
                                            open2 == item3.id
                                              ? "rotate(90deg)"
                                              : "rotate(0)"
                                          }`,
                                          transition: "all 0.2s",
                                        }}
                                        onClick={() =>
                                          handleDropOpen2(item3?.id)
                                        }
                                        size={20}
                                      />
                                    </>
                                  )}
                                </li>
                                {item3?.list2 && (
                                  <>
                                    <ul
                                      className={` ${
                                        open2 == item3?.id
                                          ? "height-auto"
                                          : "height-0"
                                      } list-unstyled ms-3 text-capitalize  d-flex flex-column gap-2 `}
                                    >
                                      {item3?.list2?.map((item4, index) => {
                                        return (
                                          <>
                                            <li
                                              onClick={() =>
                                                handleActive2(item4?.id)
                                              }
                                              key={item4.id}
                                              className={`d-flex gap-2 ${
                                                active2 == item4.id &&
                                                "active-list"
                                              }  `}
                                            >
                                              <GoDot />
                                              <Typography>
                                                {item4?.text}
                                              </Typography>
                                            </li>
                                          </>
                                        );
                                      })}
                                    </ul>
                                  </>
                                )}
                              </div>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                    {/* {item2?.list && (
                      <>
                        
                      </>
                    )} */}
                  </>
                );
              });
            })}
          </>
        </ul>
      </section>
    </>
  );
};

export default AdminSidebar;
