import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  categoryName: String,
  categoryImg: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Category =
  mongoose.models.Category ?? mongoose.model("Category", categorySchema);
