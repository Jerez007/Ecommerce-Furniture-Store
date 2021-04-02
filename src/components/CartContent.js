import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartColumns, CartItem, CartTotals } from ".";
import { useCartContext } from "../context/cart_context";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Container>
      <CartColumns />
      <CartTotals />

      <hr className="hr-block" />

      <h4 className="shiphome-text">SHIP TO HOME</h4>

      {cart.map((item) => {
        return (
          <div className="item-container">
            <CartItem key={item.id} {...item}></CartItem>
          </div>
        );
      })}

      <button type="button" className="btn clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  color: var(--clr-primary-3);

  .hr-block {
    background-color: #f7d656;
    height: 40px;
    border: none;
    margin-bottom: 30px;
    padding: 20px;
  }

  h4 {
    margin-bottom: 30px;
  }

  .clear-btn {
    background-color: red !important;
    margin-top: 20px;
  }

  .item-container {
    border-bottom: 1px solid hsl(0, 0%, 90%, 0.3);
  }

  /* >>>>>>>>>>>>>>>>>> */
  /* media queries */
  @media screen and (min-width: 776px) {
    .hr-block,
    .shiphome-text {
      display: none;
    }
  }
`;

export default CartContent;
