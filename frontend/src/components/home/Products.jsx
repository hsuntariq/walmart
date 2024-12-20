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

  return (
    <>
      <div className="col-lg-10 py-xl-5 py-3 col-11 mx-auto">
        <h2>Products</h2>

        <div className="row my-3">
          {productLoading ? (
            <ProductLoading />
          ) : (
            <>
              {products?.map((item, index) => {
                return <MyProducts key={index} {...item} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
