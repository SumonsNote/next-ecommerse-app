import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema({
  brandName: String,
  brandImg: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Brand =
  mongoose.models.Brand ?? mongoose.model("Brand", brandSchema);
