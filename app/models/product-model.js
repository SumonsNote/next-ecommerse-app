import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  shortDes: String,
  price: Number,
  image: String,
  category: String,
  source: String,
  star: Number,
  remark: {
    type: String,
    enum: [],
    default: "Popular",
  },
  brandId: { type: Schema.Types.ObjectId, ref: "Brand" },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  productDetails: { type: Schema.Types.ObjectId, ref: "ProductDetail" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);
