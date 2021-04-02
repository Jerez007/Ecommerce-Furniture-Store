import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Container>
      <div className="content">
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Subtotal</h4>
        <span></span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  color: var(--clr-primary-3);

  /* media queries */
  @media screen and (min-width: 776px) {
    display: block;
    margin-top: 60px;

    .content {
      display: grid;
      grid-template-columns: 4fr 1fr 1fr 1fr;
      column-gap: 1rem;
      border-bottom: 1px solid hsl(0, 0%, 90%, 0.9);
    }
  }
`;

export default CartColumns;
