// models/User.ts
import mongoose from "mongoose";

const PhysicalSchema = new mongoose.Schema({
  height: String,
  weight: String,
  bmi: String,
  notes: String,
});

const MentalSchema = new mongoose.Schema({
  state: String,
  psychological: String,
  notes: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  role: { type: String, default: "user" },
  PhysicalAssessment: PhysicalSchema,
  mentalAssesment: MentalSchema,
});

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema);
