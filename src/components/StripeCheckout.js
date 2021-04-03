import React from "react";
import styled from "styled-components";

const CheckoutForm = () => {
  return <h2>hello from stripe checkout</h2>;
};

const StripeCheckout = () => {
  return <Container>
    <CheckoutForm />
  </Container>
};

const Container = styled.section``;

export default StripeCheckout;
