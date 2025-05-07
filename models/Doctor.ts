import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true }, // ✅ Add this
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["admin", "doctor"], default: "doctor" },
  specialization: String,
  joinDate: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  assignedPrograms: [
    {
      programId: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
      assignedOn: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

// ✅ Prevent OverwriteModelError
export default mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

// ✅ Safe MongoDB connection for App Router
export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGODB_URI!);
};
// ✅ Close MongoDB connection when the app is terminated