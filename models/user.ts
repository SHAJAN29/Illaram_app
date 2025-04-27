import mongoose from "mongoose";

// Physical Schema for storing physical assessment details
const PhysicalSchema = new mongoose.Schema({
  height: String,
  weight: String,
  bmi: String,
  pulse: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Mental Schema for storing mental assessment details
const MentalSchema = new mongoose.Schema({
  state: String,
  psychological: String,
  notes: String,
});

// Payment Schema for storing payment details
const PaymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// User Schema for storing user data
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // important
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  physicalAssessmentResult: PhysicalSchema, // Embedding PhysicalSchema
  mentalAssessment: MentalSchema, // Embedding MentalSchema (note the new field name)
  payment: PaymentSchema, // Embedding PaymentSchema
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
