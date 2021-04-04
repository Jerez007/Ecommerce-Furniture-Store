import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount } = useCartContext();
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
        </div>

        {/* order summary details. can be toggled on or off */}
        {toggle && (
          <div className="order-details">
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

        <Link to="/checkout">
          <button type="button" className="btn">
            Checkout
          </button>
        </Link>
      </div>

      {/* displayed on wider screens only */}
      <div className="desktop-version">
        <h2>Order Summary</h2>

        <div className="order-details">
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

        <div className="total">
          <h3>Due now</h3>
          <h3>{formatPrice(total_amount * 0.13 + total_amount)}</h3>
        </div>

        <Link to="/checkout">
          <button type="button" className="btn">
            Checkout
          </button>
        </Link>
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
    height: 1px;
    color: rgba(255, 255, 255, 0.25) !important;
  }

  .summary-section,
  .total,
  .subtotal,
  .tax {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    margin-top: 25px !important;
    width: 100% !important;
    height: 40px !important;
  }

  h5:nth-child(1) {
    margin-bottom: 15px;
    font-size: 16px;
  }

  p:nth-child(1) {
    margin-bottom: 10px;
  }

  .order-details {
    margin-top: 20px;

    hr {
      margin: 18px 0px;
    }
  }

  .total {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .subtotal,
  .tax {
    font-size: 18px;
  }

  /* styling for desktop version */
  .desktop.version {
    display: flex;
  }

  /* >>>>>>>>>>>>>>>>>>>>>> */
  /* Media queries */
  /* media queries */
  @media screen and (max-width: 776px) {
    .desktop-version {
      display: none;
    }
  }

  @media screen and (min-width: 776px) {
    .content {
      display: none !important;
    }
  }
`;

export default CartTotals;
