import mongoose, { Schema } from "mongoose";

const customerProfileSchema = new Schema({
  cusName: String,
  cusEmail: String,
  cusAddress: String,
  cusPostcode: String,
  cusCity: String,
  cusFax: String,
  cusState: String,
  cusCountry: String,
  cusPhone: String,
  shipAddress: String,
  shipPostcode: String,
  shipCity: String,
  shipFax: String,
  shipState: String,
  shipCountry: String,
  shipPhone: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const CustomerProfile =
  mongoose.models.CustomerProfile ??
  mongoose.model("CustomerProfile", customerProfileSchema);
