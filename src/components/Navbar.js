import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useProductsContext } from "../context/products_context";
import { useFilterContext } from "../context/filter_context";
import { useCartContext } from "../context/cart_context";

function Navbar() {
  const { toggleSidebar } = useProductsContext();
  const { total_items } = useCartContext(); // the total number of items in the cart
  const {
    filters: { text },
    updateFilters,
  } = useFilterContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-left">
            <p>Français</p>
          </div>

          <div className="nav-right">
            <div>
              <PersonOutlineRoundedIcon fontSize="large" />
              <p>Sign In</p>
            </div>

            <div>
              <PinDropOutlinedIcon fontSize="large" />
              <p>Find a store</p>
            </div>
          </div>
        </div>

        <div className="nav-search">
          {/* Toggle button only visible for smaller screens */}
          <button type="button" className="nav-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>

          <Link to="/">
            <img src={logo} alt="logo furniture" />
          </Link>

          <form onSubmit={(e) => e.preventDefault()} className="desktop-search">
            <input
              type="text"
              name="text"
              placeholder="Type here to search"
              value={text}
              onChange={updateFilters}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </form>

          <div className="location">
            <p>
              My store: <span>Vancouver</span>
              <br />
              <span>(Granville St.), BC</span>
              <br />
              <span className="hours">10:00-18:00</span>
            </p>
            <Link to="/cart" className="cart-container">
              <ShoppingCartOutlinedIcon className="basket" fontSize="large" />
              <span className="cart-total">{total_items}</span>
            </Link>
          </div>
        </div>

        {/* Search bar moves to it's own row by itself for devices 756px or less */}
        <form onSubmit={(e) => e.preventDefault()} className="mobile-search">
          <input
            type="text"
            name="text"
            placeholder="Type here to search"
            value={text}
            onChange={updateFilters}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  .nav-center {
    display: flex;
    flex-direction: column;
    max-width: 1534px;
  }

  .nav-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--clr-primary-1);
    color: white;
    margin-bottom: 10px;
    padding: 4px;
    font-size: 14px;
  }

  .nav-left {
    flex: 1;
    margin-left: 30px;
  }

  .nav-left p {
    cursor: pointer;
    width: max-content;
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
  .nav-right p:hover {
    border-bottom: 1px white solid;
  }

  /* links from the sidebar */
  .links {
    li {
      a {
        text-decoration: none;
      }
    }
  }
  /* end of links from the sidebar */

  /* Element that contains the search bar*/
  .nav-search {
    display: flex;
    align-items: center;
    border: 1px solid #f1f1f1;

    /* sidebar */
    .nav-toggle {
      background: transparent;
      border: transparent;
      border-right: 1px solid #f1f1f1;
      padding-right: 5px;

      color: gray;
      cursor: pointer;
      margin-right: 10px;
      transition: var(--transition);

      svg {
        font-size: 2rem;
      }
    }

    .nav-toggle:hover {
      color: darkgray;
      /* transform: rotate(90deg); */
    }
    /* End of sidebar*/

    form {
      display: flex;

      input {
        width: 410px;
        height: 45px;
        border-radius: 1px;
        border: 1px solid #e4e4e4;
        outline: none;
      }

      input[type="text"] {
        padding-left: 20px;
      }
    }

    img {
      width: 90px;
      height: 40px;
      border-radius: 2px;
      float: left;
    }

    .location {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: gray;
      text-align: right;
      font-size: 14px;
      margin-left: 5em;

      .basket {
        transform: rotateY(3.142rad);
        margin-left: 10px;
        color: var(--clr-primary-3);
      }

      p {
        border-right: 1px solid lightgray;
        padding-right: 20px;
      }

      span {
        color: darkblue;
        font-weight: 550;
      }
    }
  }
  /* End of element that contains search bar*/

  /* Search bar for mobile */
  .mobile-search {
    display: flex;

    input {
      border: none;
      background-color: #e4e4e4;
      flex: 1;
      height: 45px;
    }

    input[type="text"] {
      padding-left: 20px;
    }

    button {
      border: none;
      background-color: #e4e4e4;
      padding-right: 10px;
    }
    input:focus {
      outline: none;
    }
  }
  /* End of search bar for mobile */

  /* total items in cart */
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 5px;
  }

  .cart-total {
    position: absolute;
    top: -5px;
    background-color: #f7d656;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 0.70rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  /* end of the total items in cart */

  //  /* MEDIA QUERIES */
  @media screen and (max-width: 358px) {
    .nav-search {
      border-bottom: 0px;
      padding: 7px 0;
    }

    .location {
      p {
        width: 90px;
        span.hours {
          display: none;
        }
      }
    }

    .nav-left {
      margin-left: 10px;
    }

    .nav-right {
      margin-right: -5px;
    }
  }

  @media screen and (max-width: 765px) {
    .nav-search {
      padding: 7px 0;
      border-bottom: 0px;

      .location {
        margin-left: auto;
        margin-right: 0px;
      }
    }

    .nav-search form {
      display: none;
    }

    /* start of header */
    .nav-header {
      background-color: white;
      color: gray;
      font-size: 18px;
      margin: 2px;
    }

    .nav-right {
      display: flex;
      font-size: 15px;
      margin-right: -5px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 10px;

        .MuiSvgIcon-root {
          font-size: 25px;
        }
      }
    } /*  of header */
  }

  @media screen and (min-width: 766px) {
    .mobile-search {
      display: none;
    }

    .nav-right {
      div {
        display: flex;
        align-items: center;
      }
    }

    .nav-search {
      justify-content: space-between;
      border-bottom: 2px solid lightgray;
      padding-bottom: 10px;
      border-top: none;
      padding-left: 30px;

      img {
        width: 95px;
        height: 50px;
        margin-right: auto;
      }

      form {
        input {
          width: 300px;
          margin-left: 30px;
        }
      }
    }

    .nav-toggle {
      display: none;
    }

    .location {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1031px) {
    .location {
      margin-right: 35px;
    }

    .nav-right {
      margin-right: 45px;
    }

    .basket {
      margin-right: 0px;
    }
  }
`;

export default Navbar;
