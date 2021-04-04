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
    date: "",
    id,
  });

  // sends request to the server
  const createReview = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/reviews', reviewData).then(() => {
      window.location.reload(false)
    })
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
                date: new Date(),
              });
              console.log(">>>>>>>>>>>>>>", reviewData);
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

  .content {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 40px;
  }

  textarea {
    height: 100px;
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
`;

export default WriteReviewPage;
