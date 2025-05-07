import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phone: { type: String, required: true, match: /^[0-9]{10}$/ },
  message: { type: String, required: true },
  resume: { type: Buffer, required: true }, // optional – if you store resumes in cloud (e.g. S3)
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
