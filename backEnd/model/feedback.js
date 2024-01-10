import mongoose from "mongoose";

const feedBackSchema = mongoose.Schema({
  visitOption: {
    type: String,
    required: true,
  },
  foodRating: {
    type: String,

    required: true,
  },
  serviceRating: {
    type: String,

    required: true,
  },
  experienceRating: {
    type: String,
    required: true,
  },
  recommandResturant: {
    type: Boolean,
    required: true,
  },
  suggestion: {
    required: true,
    type: String,
  },
  followUp: {
    type: Boolean,
    required: true,
  },
});
export const feedBackModel = mongoose.model("Feedback", feedBackSchema);
