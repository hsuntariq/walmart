const asyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");

const addProduct = asyncHandler(async (req, res) => {
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
  } = req.body;

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
    res.status(400);
    throw new Error("Please enter all the relevant fields");
  }
  // check if the product name,sku or barcode already exists
  const checkExisting = await productModel.findOne({
    $or: [{ product_name }, { product_barcode }, { product_sku }],
  });

  if (checkExisting) {
    res.status(401);
    throw new Error("Product already present");
  }

  const createdProduct = await productModel.create({
    user: req.user._id,
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
  });

  res.send(createdProduct);
});

const getProducts = asyncHandler(async (req, res) => {
  const myProducts = await productModel.find();
  res.send(myProducts);
});

module.exports = {
  addProduct,
  getProducts,
};
