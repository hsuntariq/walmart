import React, { useRef, useState } from "react";
import { FormCheck } from "react-bootstrap";
import logo from "../../../assets/images/logo.webp";
import { adminSidebarData } from "../data/adminSidebarData";
import { Typography } from "@mui/material";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineChevronRight } from "react-icons/md";

const AdminSidebar = () => {
  const [open, setOpen] = useState(null);
  const dropRef = useRef();
  // const handleDropDown = () => {
  //   dropRef.current.classList.toggle("height-0");
  // };

  const handleDropOpen = (index) => {
    setOpen(open == index ? null : index);
  };

  return (
    <>
      <section className="height-100 p-4 bg-light overflow-y-scroll">
        <div className="d-flex justify-content-between align-items-center">
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
                    <div className="">
                      <li
                        className="d-flex align-items-center justify-content-between"
                        key={index2}
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
                              onClick={() => handleDropOpen(index2)}
                              size={20}
                            />
                          </>
                        )}
                      </li>
                      <ul
                        // ref={dropRef}
                        className={` ${
                          open == index2 ? "" : "height-0"
                        } list-unstyled bg-warning  d-flex flex-column gap-2`}
                      >
                        {item2?.list?.map((item3, index3) => {
                          return (
                            <>
                              <li>
                                <Typography>{item3?.text}</Typography>
                              </li>
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
