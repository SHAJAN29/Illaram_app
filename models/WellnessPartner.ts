// lib/models/WellnessPartner.ts
import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    serviceType: { type: String, required: true },
  },
  { timestamps: true }
);

export const WellnessPartner =
  mongoose.models.WellnessPartner ||
  mongoose.model("WellnessPartner", PartnerSchema);
