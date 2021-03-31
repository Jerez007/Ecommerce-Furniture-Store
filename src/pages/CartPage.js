import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContent from "../components/CartContent";
import { useCartContext } from "../context/cart_context";

const CartPage = () => {
  const { cart } = useCartContext();

  // if cart is empty
  if (cart.length < 1) {
    return (
      <Container>
        <h1>Cart</h1>
        <br />
        <p>You have no items in your shopping cart.</p>
        <br />
        <p>
          Click <Link to="/products">here</Link> to continue shopping.{" "}
        </p>
      </Container>
    );
  }

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

      <CartContent />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  color: var(--clr-primary-3);

  h1 {
    margin-bottom: 10px;
  }

  .link {
    text-decoration: underline;
  }
`;

export default CartPage;
