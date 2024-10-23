import mongoose, { Schema } from "mongoose";

const invoiceProductSchema = new Schema({
  invoiceId: { type: Schema.Types.ObjectId, ref: "Invoice" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  qty: Number,
  salePrice: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const InvoiceProduct =
  mongoose.models.InvoiceProduct ??
  mongoose.model("InvoiceProduct", invoiceProductSchema);
