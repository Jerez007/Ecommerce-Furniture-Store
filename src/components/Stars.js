import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <StarsContainer>
      <div className="content">
        <span className="stars"> {tempStars}</span>
        <span className="reviews">{reviews} (reviews)</span>
      </div>
    </StarsContainer>
  );
};

const StarsContainer = styled.div`
  .content {
    display: flex;
    font-size: 16px;
    text-align: center;
    justify-content: center;
  }

  .stars {
    color: black;
    margin-right: 3px;
  }

  .reviews {
    font-size: 15px;
  }
`;

export default Stars;
