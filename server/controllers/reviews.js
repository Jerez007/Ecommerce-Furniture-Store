import ReviewsData from "../models/reviews.js";

export const getReviews = async (req, res) => {
  try {
    const allReviews = await ReviewsData.find();

    res.status(200).json(allReviews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReviews = async (req, res) => {
  const reviews = req.body;

  const newReview = new ReviewsData(reviews);

  try {
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

