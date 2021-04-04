import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  id: String,
  nickname: String,
  review_summary: String,
  review: String,
  date: String,

});

// creates a model
const reviews = mongoose.model("reviews", reviewSchema);

export default reviews;
