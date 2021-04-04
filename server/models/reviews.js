import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  regNo: Number,
  review: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
});

// creates a model
const reviews = mongoose.model("reviews", reviewSchema);

export default reviews;
