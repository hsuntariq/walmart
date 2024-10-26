import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Departments = ({ dep }) => {
  const handleCloseDep = () => {
    dep.current.style.transform = "translateX(100%)";
    dep.current.classList.add("opacity-0");
  };
  return (
    <>
      <div
        ref={dep}
        className="height-100 opacity-0 text-sm-mid text-secondary transition-fast top-0 start-0 bg-white w-100 position-absolute py-5 px-4"
        style={{
          transform: "translateX(100%)",
        }}
      >
        <div
          onClick={handleCloseDep}
          className="d-flex w-100 fs-4 align-items-center fw-light"
        >
          <MdKeyboardArrowLeft size={30} />
          <p className="m-0">Back to main menu</p>
        </div>
        <hr />
        <div className="d-flex py-2 justify-content-between align-items-center">
          <h5>All Departments</h5>
          <p>See All</p>
        </div>
        <hr />
        <ul className="list-unstyled d-flex gap-1 flex-column">
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
          <li className="d-flex w-100 justify-content-between align-items-center">
            <p className="text-md">Savings</p>
            <MdKeyboardArrowRight />
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
};

export default Departments;
