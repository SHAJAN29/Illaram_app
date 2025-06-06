import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
  role: String,
  priority: String,
  challenge: String,
  activity: String,
  routine: String,
  age: String,
  subscription: String,
  guidance: String,
  childSupport: String,
  barrier: String,
  convincer: String,
  rating: String,
  contactMethod: String,
  feedback: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.SurveyResponse || mongoose.model('SurveyResponse', SurveySchema);
