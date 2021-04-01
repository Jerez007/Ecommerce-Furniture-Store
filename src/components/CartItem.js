import React from "react";
import styled from "styled-components";
import { MiniQuantityButtons } from ".";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import QuantityButton from "./QuantityButton";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};

  const decrease = () => {};

  return (
    <Container>
      <div className="content">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>

        <div className="name">
          <p>{name}</p>
        </div>

        <div className="info">
          <p className="price-container">
            <span>Price</span>
            <span className="price">{formatPrice(price)}</span>
          </p>
        </div>

        <div className="toggle-container">
          <MiniQuantityButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        </div>

        <div className="subtotal-container">
          <button type="button" onClick={() => removeItem(id)}>
            <DeleteIcon />
          </button>
          <h5>Subtotal</h5>
          <p>{formatPrice(price * amount)}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: var(--clr-primary-3);
  margin-bottom: 40px;

  .content {
    display: grid;
    grid-template-areas:
      "images productName buttons buttons buttons empty"
      "images price buttons buttons buttons subtotal"
      "images price buttons buttons buttons subtotal";
    gap: 0;
  }

  /* grid assignments */
  .image-container {
    grid-area: images;
  }

  .name {
    grid-area: productName;
  }

  .info {
    grid-area: price;
  }

  .toggle-container {
    grid-area: buttons;
    margin-left: -100px;
  }

  .subtotal-container {
    grid-area: subtotal;
  }

  /* end of grid assignments */

  img {
    height: 150px;
    width: 150px;
    object-fit: contain;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-transform: capitalize;
  }

  /* styling for the price */
  .price-container span:nth-child(1) {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .price-container {
    display: flex;
    flex-direction: column;
  }

  .price {
    font-weight: 550;
  }
  /* end of styling for the price */

  .subtotal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -45px;

    button {
      border: none;
      background-color: white;
      outline: none;
    }

    h5 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
  .name {
    text-transform: capitalize;
  }
`;

export default CartItem;
