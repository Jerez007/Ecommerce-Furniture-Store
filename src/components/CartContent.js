import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartContent = () => {
  return (
    <Container>
      <h1>Cart</h1>
      <p>
        Not yet ready to order? Click here to{" "}
        <Link to="/" className="link">
          continue shopping
        </Link>
        .
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  color: var(--clr-primary-3);

  h1 {
    margin-bottom: 10px;
  }

  .link {
    text-decoration: underline;
  }
`;

export default CartContent;
