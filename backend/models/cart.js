const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    cart: {
      type: Array,
      default: [],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
