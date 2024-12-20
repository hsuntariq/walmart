import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductLoading = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((item, index) => {
        return (
          <div key={index} className="col-lg-3 col-md-4">
            <div className="card p-3 shadow border-0">
              <Skeleton height={250} />
              <div className="d-flex gap-2 my-3">
                <Skeleton width={100} />
                <Skeleton width={60} />
              </div>
              <Skeleton count={3} />
              <div className="my-2">
                <Skeleton className="rounded-pill" width={80} height={40} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductLoading;
