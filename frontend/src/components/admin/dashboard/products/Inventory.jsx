import { Typography } from "@mui/material";
import React, { useState } from "react";
import { inventory } from "./data/InverntoryData";
import Restock from "./inventory/Restock";
import ShippingType from "./inventory/ShippingType";
import GlobalDelivery from "./inventory/GlobalDelivery";
import Attributes from "./inventory/Attributes";
import Advanced from "./inventory/Advanced";

const Inventory = () => {
  const [selected, setSelected] = useState("Restock");
  return (
    <>
      <div className="card p-4 shadow my-2 border-0">
        <Typography variant="h6">Inventory</Typography>
        <div className="d-flex w-100 gap-4">
          <ul className="d-flex w-25 list-unstyled flex-column">
            {inventory?.map((item, index) => {
              return (
                <li
                  onClick={() => setSelected(item?.title)}
                  key={index}
                  className={`d-flex align-items-center gap-2 ${
                    selected == item?.title
                      ? "bg-purple text-white rounded-end-pill"
                      : ""
                  } `}
                >
                  {item?.icon} {item?.title}
                </li>
              );
            })}
          </ul>
          <div className="vertical-line"></div>
          <div className="w-100">
            {selected == "Restock" && <Restock />}
            {selected == "Shipping" && <ShippingType />}
            {selected == "Global Delivery" && <GlobalDelivery />}
            {selected == "Attributes" && <Attributes />}
            {selected == "Advanced" && <Advanced />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
