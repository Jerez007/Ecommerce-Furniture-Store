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
      </div>

    </Container>
  );
};

const Container = styled.div`
  display: none;
  color: var(--clr-primary-3);

  /* media queries */
  @media screen and (min-width: 776px) {
    display: flex;
    margin-top: 60px;

    .content {
      display: grid;
      flex: 1;
      grid-template-columns: 300px 1fr 1fr 1fr auto;
      column-gap: 1rem;
      justify-items: center;
      border-bottom: 1px solid hsl(0, 0%, 90%, 0.9);
      height: 30px;
    }

    .order-summary {
      width: 380px;
      margin-left: 30px;
      margin-top: -50px;
    }
  }

  @media screen and (max-width: 776px) {
    .order-summary {
      display: none;
    }
  }
`;

export default CartColumns;
