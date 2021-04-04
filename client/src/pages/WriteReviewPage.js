import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { SignalCellularNull } from "@material-ui/icons";
import axios from "axios";

const WriteReviewPage = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    nickname: "",
    review: "",
    review_summary: "",
    date: "",
    id,
  });

  // sends request to the server
  const createReview = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/reviews", reviewData).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <Container>
      <section>
        <h1>Write a review</h1>

        <form className="content" onSubmit={createReview}>
          <label for="nickname">Nickname *</label>
          <input
            required
            maxlength="20"
            type="text"
            id="nickname"
            name="nickname"
            onChange={(e) => {
              setReviewData({ ...reviewData, nickname: e.target.value });
              console.log(">>>>>>>>>>>>>>", reviewData);
            }}
          />

          <label for="review_summary">Review Summary*</label>
          <textarea
            required
            className="review_summary"
            maxlength="25"
            id="review_summary"
            name="review_summary"
            onChange={(e) => {
              setReviewData({
                ...reviewData,
                review_summary: e.target.value,
                date: new Date(),
              });
            }}
          />

          <label for="review">Review *</label>
          <textarea
            required
            maxlength="250"
            id="review"
            name="review"
            placeholder="Share your thoughts about the product"
            onChange={(e) => {
              setReviewData({
                ...reviewData,
                review: e.target.value,
              });
            }}
          />

          <input
            type="submit"
            value="Submit Review"
            name="submit"
            className="btn"
          ></input>
        </form>
      </section>
    </Container>
  );
};

const Container = styled.main`
  padding: 50px;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;

  .content {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 40px;
    outline: none;
    font-size: 20px;
  }

  textarea {
    height: 100px;
    outline: none;
    font-size: 20px;
  }

  .btn {
    max-width: 200px;
    height: 50px;
    font-size: 18px;
    margin-top: 25px;
  }

  label {
    margin-bottom: 10px;
    margin-top: 15px;
  }

  .review_summary {
    height: 50px !important;
  }
`;

export default WriteReviewPage;
