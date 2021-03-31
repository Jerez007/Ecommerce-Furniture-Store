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
      <hr/>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  color: var(--clr-primary-3);

  /* media queries */
  @media screen and (min-width: 776px) {
    display: block;

    .content {
      display: grid;
      grid-template-columns: 6fr 1fr 2fr 1fr auto;
      column-gap: 1rem;
    }

    hr {
      margin: 7px 0px;
    }
  }
`;

export default CartColumns;
