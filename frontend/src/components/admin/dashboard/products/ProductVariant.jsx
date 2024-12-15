import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import VariantInput from "./VariantInput";
import { GoPlus } from "react-icons/go";
import { Button, Typography } from "@mui/material";

const ProductVariant = ({ formFields, setFormFields }) => {
  const [count, setCount] = useState([
    { id: Date.now(), type: "", variant: "" },
  ]);

  const handleChange = (id, e) => {
    setCount((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, [e.target.name]: e.target.value } : item
      )
    );
  };

  useEffect(() => {
    setFormFields({
      ...formFields,
      product_variant: [count],
    });
  });

  return (
    <>
      <div className="card p-4 shadow my-2 border-0">
        <Typography variant="h6" className="mb-2">
          Product Variants
        </Typography>
        {count?.map((item, index) => (
          <VariantInput
            id={item.id}
            type={item.type}
            variant={item.variant}
            count={count}
            setCount={setCount}
            handleChange={handleChange}
            key={item.id}
          />
        ))}
        <Button
          onClick={() =>
            setCount([...count, { id: Date.now(), type: "", variant: "" }])
          }
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
