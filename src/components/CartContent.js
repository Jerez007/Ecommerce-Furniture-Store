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

      <h4>SHIP TO HOME</h4>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  color: var(--clr-primary-3);

  .hr-block {
    background-color: #f7d656;
    height: 40px;
    border: none;
    margin-bottom: 20px;
    padding: 20px;
  }

  h4 {
    margin-bottom: 30px;
  }


`;

export default CartContent;
