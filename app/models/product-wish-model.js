import mongoose, { Schema } from "mongoose";

const productWishSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  createdAt: { type: Date, default: Date.now },
});

export const ProductWish =
  mongoose.models.ProductWish ??
  mongoose.model("ProductWish", productWishSchema);
