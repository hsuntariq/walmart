import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import VariantInput from "./VariantInput";
import { GoPlus } from "react-icons/go";
import { Button, Typography } from "@mui/material";

const ProductVariant = () => {
  const [count, setCount] = useState([{ id: Date.now() }]);

  return (
    <>
      <div className="card p-4 shadow my-2 border-0">
        <Typography variant="h6" className="mb-2">
          Product Variants
        </Typography>
        {count?.map((item, index) => {
          return (
            <VariantInput
              count={count}
              setCount={setCount}
              key={item.id}
              id={item.id}
            />
          );
        })}
        <Button
          onClick={() => setCount([...count, { id: Date.now() }])}
          sx={{
            width: "max-content",
            background: "#8B50F8",
            color: "white",
            fontWeight: "500",
          }}
        >
          <GoPlus fontWeight={"bold"} size={20} />
          add another option
        </Button>
      </div>
    </>
  );
};

export default ProductVariant;
