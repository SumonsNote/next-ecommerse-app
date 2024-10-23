import mongoose, { Schema } from "mongoose";

const productReviewSchema = new Schema({
  description: String,
  rating: Number,
  customerId: { type: Schema.Types.ObjectId, ref: "CustomerProfile" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ProductReview =
  mongoose.models.ProductReview ??
  mongoose.model("ProductReview", productReviewSchema);
