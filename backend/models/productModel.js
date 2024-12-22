const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product_name: {
      type: String,
      required: true,
    },
    product_barcode: {
      type: String,
      required: true,
    },
    product_sku: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_base_price: {
      type: Number,
      required: true,
    },
    product_discounted_price: {
      type: Number,
      required: true,
    },
    tax: {
      type: Boolean,
      default: true,
    },
    in_stock: {
      type: Boolean,
      default: true,
    },
    product_images: {
      type: Array,
      default: [],
      required: true,
    },
    product_variant: {
      type: Array,
      required: true,
    },
    restock: {
      type: Number,
      required: false,
    },
    shippingType: {
      type: String,
    },
    delivery: {
      type: String,
    },
    attributes: {
      type: Array,
    },
    advanced: {
      type: Array,
    },
    total_product: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
