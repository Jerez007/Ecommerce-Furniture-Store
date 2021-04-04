import React from "react";
import styled from "styled-components";
import { ProductHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <Container>
      <ProductHero title="checkout"/>

      <div className="content">
        {cart.length < 1 ? (
          <div className="message">
            Your cart is empty. <br/> <Link to="/products"><button type="button" className="btn">Start Shopping</button></Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </Container>
  );
};

const Container = styled.main`
  .message {
    font-size: 30px;
    text-align: center;
    padding: 80px;
    line-height: 2;
  }

  button {
    font-weight: 450 !important;
  }
`;

export default CheckoutPage;
