import React from "react";
import styled from "styled-components";
import { CartColumns, CartItem, CartTotals } from ".";
import { useCartContext } from "../context/cart_context";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Container>
      {/* on smaller screens this div takes up the whole width as the element to the right is not to display */}
      <div className="left-side">
        <CartColumns />

        <div className="cart-totals">
          <CartTotals />
        </div>

        <hr className="hr-block hide" />

        <h4 className="shiphome-text">SHIP TO HOME</h4>

        {cart.map((item) => {
          return (
            <div className="item-container">
              <CartItem key={item.id} {...item}></CartItem>
            </div>
          );
        })}

        <button type="button" className="btn clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      {/* displayed only when on wide screen */}
      <div className="right-side">
        <CartTotals />
        <hr className="hr-block" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  color: var(--clr-primary-3);

  .hr-block {
    background-color: #f7d656;
    height: 40px;
    border: none;
    margin-bottom: 30px;
    padding: 17px;
    margin-left: 10px;
  }

  h4 {
    margin-bottom: 30px;
  }

  .clear-btn {
    background-color: red !important;
    margin-top: 40px;
    max-width: 150px;
  }

  .item-container {
    border-bottom: 1px solid hsl(0, 0%, 90%, 0.3);
  }

  /* >>>>>>>>>>>>>>>>>> */
  /* media queries */
  @media screen and (min-width: 776px) {
    display: flex;
    justify-content: space-between;

    .hide,
    .shiphome-text {
      display: none;
    }

    .cart-totals {
      display: none !important;
    }

    .left-side {
      flex: 1;
    }

    .right-side {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 776px) {
    .right-side {
      display: none;
    }
  }
`;

export default CartContent;
