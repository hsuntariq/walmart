const express = require("express");
const {
  addProduct,
  getProducts,
  addToCart,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const productRouter = express.Router();

productRouter.post("/add-product", authMiddleware, addProduct);
productRouter.get("/get-products", getProducts);
productRouter.post("/add-to-cart", authMiddleware, addToCart);

module.exports = productRouter;
