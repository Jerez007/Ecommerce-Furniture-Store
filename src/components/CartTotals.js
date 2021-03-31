import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";


const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()

  return (
    <Container>
      <div className="content">
        <div className="summary-section">
          <h2>Order Summary</h2>
          <ArrowDropDownIcon fontSize="large" />
        </div>
        <hr />
        <div className="total">
          <h3>Due now</h3>
          <h5>{formatPrice(total_amount)}</h5>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: var(--clr-primary-3);
  margin-bottom: 30px;
  background-color: var(--clr-primary-5);
  padding: 30px;

  hr {
    margin: 10px 0px;
  }

  .summary-section {
    display: flex;
    justify-content: space-between;
  }
`;

export default CartTotals;
