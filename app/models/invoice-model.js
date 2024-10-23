import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema({
  total: String,
  vat: String,
  payable: String,
  cusDetails: String,
  shipDetails: String,
  tranId: String,
  valId: String,
  deliveryStatus: { type: String, enum: ["Pending", "Shipped", "Delivered"] },
  paymentStatus: { type: String, enum: ["Pending", "Paid"] },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Invoice =
  mongoose.models.Invoice ?? mongoose.model("Invoice", invoiceSchema);
