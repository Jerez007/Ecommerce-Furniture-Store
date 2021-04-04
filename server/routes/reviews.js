import express from "express";
import {
  getReviews,
  createReviews,
} from "../controllers/reviews.js";
import reviews from "../models/reviews.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", createReviews);

export default router;
