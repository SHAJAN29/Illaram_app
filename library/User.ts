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

const PaymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  orderId: { type: String, required: true },
  program: { type: String, required: true },
  amount: { type: Number, required: true },
  user: { type: String, required: true },
});

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    role: { type: String, default: "user" },
    PhysicalAssessment: PhysicalSchema,
    mentalAssesment: MentalSchema,
    payment: { type: PaymentSchema, default: null },

  },
  { timestamps: true }
);

// Ensure the model is not recompiled on hot reloads
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
