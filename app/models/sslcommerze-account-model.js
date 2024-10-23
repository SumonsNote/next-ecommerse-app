import mongoose, { Schema } from "mongoose";

const sslcommerzAccountSchema = new Schema({
  storeId: String,
  storePasswd: String,
  currency: String,
  successUrl: String,
  failUrl: String,
  cancelUrl: String,
  ipnUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const SslcommerzAccount =
  mongoose.models.SslcommerzAccount ??
  mongoose.model("SslcommerzAccount", sslcommerzAccountSchema);
