import React, { useEffect, useState } from "react";
import MainContentHeader from "../main_content/MainContentHeader";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import "./product.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill theme CSS
import { IOSSwitch } from "./IOSSwitch";
import ProductInfo from "./ProductInfo";
import Pricing from "./Pricing";
import ProductImage from "./ProductImage";
import ProductVariant from "./ProductVariant";
import Inventory from "./Inventory";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductData,
  productReset,
} from "../../../../features/products/productSlice";
const ProductForm = () => {
  // states to manage the inputs / controlled data/ inputs
  // const [value, setValue] = useState(
  //   "Keep your account secure with authentication step."
  // );

  const { user } = useSelector((state) => state.user);

  const [formFields, setFormFields] = useState({
    product_name: "",
    product_barcode: "",
    product_sku: "",
    product_description: "",
    product_base_price: "",
    product_discounted_price: "",
    tax: true,
    in_stock: true,
    product_images: [],
    product_variant: [],
    restock: "",
    shippingType: "",
    delivery: "",
    attributes: "",
    advanced: "",
    total_product: "",
  });

  // desctucture
  const {
    product_name,
    product_barcode,
    product_sku,
    product_description,
    product_base_price,
    product_discounted_price,
    tax,
    in_stock,
    product_images,
    product_variant,
    restock,
    shippingType,
    delivery,
    attributes,
    advanced,
    total_product,
  } = formFields;

  // to handle text editor's input

  // handle the input change
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormFields({
      ...formFields,
      [name]: type === "checkbox" || type === "switch" ? checked : value,
    });
  };

  // get the product state

  const {
    products,
    productLoading,
    productSuccess,
    productError,
    productMessage,
  } = useSelector((state) => state.item);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productError) {
      toast.error(postMessage);
    }

    if (productSuccess) {
      toast.success("Product Added Successfully!");
    }

    dispatch(productReset());
  }, [productError, productSuccess]);

  const handleProductUpload = () => {
    if (
      !product_name ||
      !product_barcode ||
      !product_sku ||
      !product_description ||
      !product_base_price ||
      !product_discounted_price ||
      !tax ||
      !in_stock ||
      !product_images ||
      !product_variant
    ) {
      toast.error("Please enter all the relevant fields");
    } else {
      const productData = {
        product_name,
        product_barcode,
        product_sku,
        product_description,
        product_base_price,
        product_discounted_price,
        tax,
        in_stock,
        product_images,
        product_variant,
      };
      dispatch(addProductData(productData));
    }
  };

  return (
    <>
      <div className="p-xl-5 p-3">
        <MainContentHeader />

        <div className="d-flex my-4 justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Typography variant="h5">Add a new product</Typography>
            <Typography variant="p" className="text-secondary">
              Orders placed across your store
            </Typography>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Button variant="outlined">Discard</Button>
            <Button
              variant="outlined"
              style={{ borderColor: "#8C57FF", color: "#8C57FF" }}
            >
              Save Draft
            </Button>
            <Button
              onClick={handleProductUpload}
              variant="contained"
              style={{ background: "#8C57FF" }}
            >
              Publish Product
            </Button>
          </div>
        </div>

        {/* form */}

        <div className="row align-items-start">
          <div className="col-xl-8 col-lg-9">
            <ProductInfo
              {...formFields}
              handleChange={handleChange}
              formFields={formFields}
              setFormFields={setFormFields}
            />
          </div>
          <div className="col-xl-4 col-lg-3">
            <Pricing {...formFields} handleChange={handleChange} />
          </div>
          <div className="col-xl-8 col-lg-9">
            <ProductImage
              formFields={formFields}
              setFormFields={setFormFields}
            />
          </div>
          <div className="col-xl-8 col-lg-9">
            <ProductVariant
              formFields={formFields}
              setFormFields={setFormFields}
            />
          </div>
          <div className="col-xl-8 col-lg-9">
            <Inventory />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
