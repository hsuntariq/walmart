const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const productRouter = express.Router();

productRouter.post("/add-product", authMiddleware, addProduct);
productRouter.get("/get-products", getProducts);

module.exports = productRouter;
