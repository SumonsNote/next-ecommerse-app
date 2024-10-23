import mongoose, { Schema } from "mongoose";

const policySchema = new Schema({
  type: { type: String, enum: ["Privacy", "Terms"] },
  des: String,
});

export const Policy =
  mongoose.models.Policy ?? mongoose.model("Policy", policySchema);
