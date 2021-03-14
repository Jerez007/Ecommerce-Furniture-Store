import React from "react";
import styled from "styled-components";

const QuantityButton = ({ amount, increase, decrease }) => {
  return (
    <Container>
      <div className="content">
        <h3 className="title">Quantity</h3>
        <div className="buttons-container">
          <button type="button" className="quantity-btn" onClick={decrease}>
            -
          </button>
          <h3 className="quantity">{amount}</h3>
          <button type="button" className="quantity-btn" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    margin-top: 50px;
  }

  .buttons-container {
    display: flex;
    text-align: center;
  }

  .quantity-btn {
    background-color: var(--clr-primary-4);
    width: 27px;
    height: 27px;
    border: none;
    margin-bottom: 35px;
  }

  .quantity {
    background-color: var(--clr-primary-4);
    width: 55px;
    height: 27px;
    border: none;
    margin: 0 10px;
    padding: 3px;
  }

  .title {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
`;

export default QuantityButton;
