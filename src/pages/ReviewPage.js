import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { SignalCellularNull } from "@material-ui/icons";

const ReviewPage = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    nickname: "",
    review: "",
    date: null,
  });

  return (
    <Container>
      <section>
        <h1>Write a review</h1>

        <form className="content">
          <label for="nickname">Nickname *</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            onChange={(e) => {
              setReviewData({ ...reviewData, nickname: e.target.value });
            }}
          />

          <label for="review">Review *</label>
          <textarea
            id="review"
            name="review"
            placeholder="Share your thoughts about the product"
            onChange={(e) => {
              setReviewData({ ...reviewData, review: e.target.value });
            }}
          />

          <button type="button">Submit review</button>
        </form>
      </section>
    </Container>
  );
};

const Container = styled.main`
  margin-bottom: 100px;
  padding: 50px;
  width: 700px;

  .content {
    display: flex;
    flex-direction: column;
  }
`;

export default ReviewPage;
