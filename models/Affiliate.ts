// /models/Affiliate.ts
import { m } from "framer-motion/dist/types.d-DSjX-LJB";
import mongoose from "mongoose";

const AffiliateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: {
    type: String,
    required: true,},
  email: { type: String, required: true },
  website: { type: String, required: true },
  audience: { type: String, required: true },
  category: { type: String, required: true }, // New field for category
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
});

const Affiliate = mongoose.models.Affiliate || mongoose.model("Affiliate", AffiliateSchema);

export default Affiliate;
