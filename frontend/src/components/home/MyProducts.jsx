import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const MyProducts = ({
  product_images,
  product_discounted_price,
  product_base_price,
  product_description,
  product_name,
  _id,
}) => {
  return (
    <>
      <Link to={`/single-product/${_id}`} className="text-decoration-none">
        <div className="card w-100 p-3 shadow border-0">
          <img
            src={product_images[0]}
            alt="product_image"
            width={"100%"}
            height={"250px"}
            style={{ objectFit: "cover" }}
          />

          <h3 className="my-2">{product_name}</h3>
          <div className="d-flex gap-2 my-1">
            <p className="text-success fw-semibold fs-6">
              Now ${product_discounted_price}
            </p>
            <p className="text-decoration-line-through text-secondary fs-6 fe-semibold">
              ${product_base_price}
            </p>
          </div>

          <div
            className="my-2 text-dark"
            dangerouslySetInnerHTML={{ __html: product_description }}
          />
        </div>
      </Link>
    </>
  );
};

export default MyProducts;
