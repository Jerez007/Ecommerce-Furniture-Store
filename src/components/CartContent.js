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

      {cart.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  color: var(--clr-primary-3);


`;

export default CartContent;
