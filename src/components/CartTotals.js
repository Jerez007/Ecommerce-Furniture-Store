import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <div className="content">
        <div className="summary-section">
          <h2>Order Summary</h2>
          {toggle ? (
            <ArrowDropUpIcon
              fontSize="large"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <ArrowDropDownIcon
              fontSize="large"
              onClick={() => setToggle(!toggle)}
            />
          )}
          {/* <ArrowDropDownIcon
            fontSize="large"
            onClick={() => setToggle(!toggle)}
          /> */}
        </div>
        <hr />

        {/* order summary details. can be toggled on or off */}
        {toggle && (
          <div>
            <h5>Purchase now</h5>

            <div className="subtotal">
              <p>Subtotal</p>
              <h5>{formatPrice(total_amount)}</h5>
            </div>

            <div className="tax">
              <p>Tax</p>
              <h5>{formatPrice(total_amount * 0.13)}</h5>
            </div>
          </div>
        )}

        <div className="total">
          <h3>Due now</h3>
          <h3>{formatPrice(total_amount * 0.13 + total_amount)}</h3>
        </div>

        <button type="button">Checkout</button>
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

  .summary-section,
  .total,
  .subtotal,
  .tax {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 20px;
    width: 100%;
    height: 35px;
  }

  h5:nth-child(1) {
    margin-bottom: 10px;
  }

  p:nth-child(1) {
    margin-bottom: 10px;
  }

  .hide-details {
    display: none;
  }
`;

export default CartTotals;
