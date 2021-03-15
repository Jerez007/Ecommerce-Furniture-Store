import React, { useState } from "react";
import styled from "styled-components";
import QuantityButton from "./QuantityButton";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
  // const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Container>
      <div className="btn-container">
        <QuantityButton
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="cart" className="btn">
          add to cart
        </Link>
      </div>
    </Container>
  );
};

export default AddToCart;

const Container = styled.div`
  .btn-container {
    display: flex;
    flex-direction: column;
  }

  .btn {
    flex: 1;
    border-radius: 0 !important;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 550;
  }
`;
