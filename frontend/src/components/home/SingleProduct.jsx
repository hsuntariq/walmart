import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./single-product.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const SingleProduct = () => {
  const [selected, setSelected] = useState(0);
  const { id } = useParams();

  const { products } = useSelector((state) => state.item);

  const foundProuduct = products?.find((item) => {
    return item?._id == id;
  });

  const [selectedURL, setSelectedURL] = useState(
    foundProuduct?.product_images[0]
  );

  const handleLeftSlide = (e) => {
    setSelected((prevValue) => {
      const newVal = prevValue - 1;
      setSelectedURL(foundProuduct?.product_images[newVal]);
      return newVal;
    });
  };
  const handleRightSlide = (e) => {
    setSelected((prevValue) => {
      const newVal = prevValue + 1;
      setSelectedURL(foundProuduct?.product_images[newVal]);
      return newVal;
    });
  };

  return (
    <>
      <Header />
      <div className="p-5">
        <div className="row col-xl-10  col-11 mx-auto">
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-2">
                <div className="d-flex flex-column gap-2">
                  {foundProuduct?.product_images?.map((item, index) => {
                    return (
                      <div
                        onMouseEnter={() => {
                          setSelected(index);
                          setSelectedURL(item);
                        }}
                        className={`rounded-2 ${
                          selected == index
                            ? "border border-2 border-success"
                            : ""
                        } `}
                      >
                        <img className="w-100 rounded-2" src={item} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-10 position-relative">
                <div
                  onClick={handleLeftSlide}
                  className={`p-2 bg-white rounded-circle position-absolute top-50 start-0 left border shadow-lg  cursor-pointer ${
                    selected == 0 ? "d-none" : "d-block"
                  }  `}
                >
                  <MdOutlineKeyboardArrowLeft size={25} />
                </div>
                <img width={"100%"} src={selectedURL} alt="" />
                <div
                  onClick={handleRightSlide}
                  className={`p-2 bg-white rounded-circle position-absolute top-50 end-0 right border shadow-lg  cursor-pointer ${
                    selected == foundProuduct?.product_images?.length - 1
                      ? "d-none"
                      : "d-block"
                  }`}
                >
                  <MdOutlineKeyboardArrowRight size={25} />
                </div>
              </div>
            </div>
          </div>
          {/* details section */}
          <div className="col-lg-4">
            <h2>{foundProuduct?.product_name}</h2>
            <hr />
            <h5>About this item</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: foundProuduct?.product_description,
              }}
            />
          </div>

          <div className="col-lg-3 p-3 bg-light rounded-3">
            <div className="d-flex align-items-center gap-2">
              <h2>${foundProuduct?.product_discounted_price.toFixed(2)} </h2>
              <p className="text-secondary fw-semibold text-decoration">
                ${foundProuduct?.product_base_price.toFixed(2)}
              </p>
            </div>
            <p className="text-secondary text-sm">
              Price when purchased online
            </p>
            <p className="text-sm">Free 90 day return</p>
            <Button className="rounded-pill w-100 my-2" variant="contained">
              Add to cart
            </Button>
            <hr />
            <h5>How do you want your item?</h5>
            <p className="text-sm">
              You get 30 days free! Choose a plan at checkout.
            </p>
            <div className="d-flex my-3 gap-2">
              <div className="card border p-3 border-2">
                <div className="d-flex text-center flex-column">
                  <img
                    className="d-block mx-auto"
                    src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
                    width={"40px"}
                    height={"40px"}
                    alt=""
                  />
                  <p className="text-sm">Shipping</p>
                  <p className="text-sm text-success">Arrives today</p>
                  <p className="text-sm text-success">
                    Order within 10hr 12min
                  </p>
                </div>
              </div>
              <div className="card border p-3 border-2">
                <div className="d-flex text-center flex-column">
                  <img
                    className="d-block mx-auto"
                    src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
                    width={"40px"}
                    height={"40px"}
                    alt=""
                  />
                  <p className="text-sm">Shipping</p>
                  <p className="text-sm text-success">Arrives today</p>
                  <p className="text-sm text-success">
                    Order within 10hr 12min
                  </p>
                </div>
              </div>
              <div className="card border p-3 border-2">
                <div className="d-flex text-center flex-column">
                  <img
                    className="d-block mx-auto"
                    src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
                    width={"40px"}
                    height={"40px"}
                    alt=""
                  />
                  <p className="text-sm">Shipping</p>
                  <p className="text-sm text-success">Arrives today</p>
                  <p className="text-sm text-success">
                    Order within 10hr 12min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
