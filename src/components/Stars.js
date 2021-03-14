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
      <div className="section">
        <span className="stars"> {tempStars}</span>
        <span className="reviews">{reviews} (reviews)</span>
      </div>
    </StarsContainer>
  );
};

const StarsContainer = styled.div`
  .section {
    font-size: 14px;
  }

  .stars {
    color: #ffb900;
  }
`;

export default Stars;
