import mongoose from "mongoose";


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
},);

const MentalSchema = new mongoose.Schema({
  state: String,
  psychological: String,
  notes: String,
});


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // important
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  physicalAssessmentResult: PhysicalSchema,
  MentalSchema:MentalSchema,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
// export default mongoose.model("User", UserSchema, "signupData");
// export default mongoose.models.User || mongoose.model("User", UserSchema, "signupData");
