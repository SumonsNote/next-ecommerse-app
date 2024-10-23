import mongoose, { Schema } from "mongoose";

const productCartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  color: String,
  size: String,
  qty: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ProductCart =
  mongoose.models.ProductCart ??
  mongoose.model("ProductCart", productCartSchema);
