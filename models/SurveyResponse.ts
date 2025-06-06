import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
  role: String,
  goal: String,
  challenge: String,
  subscriptionFeedback: String,
  childcareFeedback: String,
  priority: String,
  recommend: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.SurveyResponse || mongoose.model("SurveyResponse", SurveySchema);
