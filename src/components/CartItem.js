import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, price, amount}) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};

  const decrease = () => {};

  return <Container>Cart Item</Container>;
};

const Container = styled.div`
  color: var(--clr-primary-3);
`;

export default CartItem;
