import mongoose from "mongoose";

const PhysicalAssessmentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    height: String,
    weight: String,
    bmi: String,
    pulse: String,
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.models.PhysicalAssessment ||
  mongoose.model("PhysicalAssessment", PhysicalAssessmentSchema);
