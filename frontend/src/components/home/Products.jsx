import Skeleton from "react-loading-skeleton";
import React, { useEffect } from "react";
import ProductLoading from "./ProductLoading";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getProductData,
  productReset,
} from "../../features/products/productSlice";
import MyProducts from "./MyProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = () => {
  const {
    products,
    productLoading,
    productError,
    productSuccess,
    productMessage,
  } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productError) {
      toast.error(productMessage || "An error occured");
    }

    dispatch(productReset());
  }, [productError]);

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="col-lg-10 py-xl-5 py-3 col-11 mx-auto">
        <h2>Products</h2>

        <div className=" my-3">
          {productLoading ? (
            <ProductLoading />
          ) : (
            <>
              <div className="slider-container">
                <Slider {...settings}>
                  {products?.map((item, index) => {
                    return <MyProducts key={index} {...item} />;
                  })}
                </Slider>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
