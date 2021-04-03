import React from "react";
import styled from "styled-components";
import { MiniQuantityButtons } from ".";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "increase");
  };

  const decrease = () => {
    toggleAmount(id, "decrease");
  };

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

      {/* only displayed on wider screens */}
      <div className="desktop-version">
        <div className="image-container">
          <img src={image} alt={name} />
          <p className="productName">{name}</p>
        </div>

        <div className="info">
          <p className="price-container">
            <span className="label">Price</span>
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
          <h5 className="label">Subtotal</h5>
          <p className="price">{formatPrice(price * amount)}</p>
          <button type="button" onClick={() => removeItem(id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
      {/* end of code for wider screens */}
    </Container>
  );
};

const Container = styled.div`
  color: var(--clr-primary-3);
  margin-bottom: 60px;
  margin-top: 20px;
  margin-right: 20px;


  
  .content {
    display: grid;
    grid-template-areas:
      "images productName buttons buttons buttons empty"
      "images price buttons buttons buttons subtotal"
      "images price buttons buttons buttons subtotal";
  }

  /* displayed on the desktop version only. hidden on smaller screens */
  .desktop-version {
    /* display: flex;
    justify-content: space-between;
    text-transform: capitalize;

    .image-container {
      display: flex;
    }

    .label {
      display: none;
    }

    .productName {
      margin-left: 30px;
    }

    .price {
      margin-right: -40px;
    }

    .toggle-container {
      margin-right: -50px;
    }

    .subtotal-container {
      .price {
        padding-bottom: -100px;
      }
    } */
  }

  /* end of display for desktop version */

  /* grid assignments */
  .image-container {
    grid-area: images;
  }

  .name {
    grid-area: productName;
    align-self: center;
  }

  .info {
    grid-area: price;
    align-self: end;
  }

  .toggle-container {
    grid-area: buttons;
    align-self: end;
    margin-left: -50px;
  }

  .subtotal-container {
    grid-area: subtotal;
    align-self: end;
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

  /* >>>>>>>>>>>>>>>>>>>>>>>>>> */
  /* media queries */
  @media screen and (max-width: 776px) {
    .desktop-version {
      display: none;
    }
  }

  @media screen and (min-width: 776px) {
    .content {
      display: none;
    }

    img {
      height: 120px;
      width: 120px;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 455px) {
    .subtotal-container {
      h5,
      p {
        display: none;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .name {
      margin-left: 10px;
    }

    .subtotal-container {
      align-self: start;
    }

    .toggle-container {
      margin-left: 0px;
    }

    .info {
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;

export default CartItem;
