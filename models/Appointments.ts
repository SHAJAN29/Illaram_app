import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please use a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone must be 10 digits"],
    },
    service: {
      type: String,
      required: [true, "Service is required"],
    },
    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// ✅ Force collection name: 'signup'
export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema, "signup Data");
