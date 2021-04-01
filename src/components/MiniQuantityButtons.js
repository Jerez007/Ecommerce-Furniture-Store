import React from "react";
import styled from "styled-components";

const MiniQuantityButton = ({ amount, increase, decrease }) => {
  return (
    <Container>
      <div className="content">
        <h3 className="title">Qty</h3>
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
  font-size: 10px; 
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .buttons-container {
    display: flex;
    align-items: center;
  }

  .quantity-btn {
    background-color: var(--clr-primary-4);
    width: 20px;
    height: 20px;
    border: none;
  }

  .quantity {
    background-color: var(--clr-primary-4);
    border: none;
    margin: 0 10px;
    padding: 7px;
    height: 20px;
    display: flex;
    align-items: center;
  }

  .title {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export default MiniQuantityButton;
