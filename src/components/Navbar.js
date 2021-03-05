import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import logo from "../assets/logo.png";
import { Shop } from "@material-ui/icons";

function Navbar() {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-left">
            <p>Français</p>
          </div>

          <div className="nav-right">
            <PersonOutlineRoundedIcon fontSize="large" />
            <p>Sign In</p>
            <PinDropOutlinedIcon fontSize="large" />
            <p>Find a store</p>
          </div>
        </div>

        <div className="nav-search">
          <Link to="/">
            <img src={logo} alt="logo furniture" />
          </Link>

          <form action="">
            <input type="text" placeholder="Type here to search" />
            <button type="submit" className="btn">
              Search
            </button>
          </form>

          <div className="location">
            <p>
              My store: <span>Burnaby</span>
              <br />
              <span>(Granville St.), BC</span>
              <br />
              10:00-18:00
            </p>

            <ShoppingCartOutlinedIcon className="basket" fontSize="large" />
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  .nav-center {
    display: flex;
    flex-direction: column;
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
  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  }
  .nav-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid lightgray;
    padding-bottom: 10px;

    img {
      width: 120px;
      height: 50px;
      margin-left: 30px;
    }

    .location {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: gray;
      text-align: right;
      margin-right: 30px;
      font-size: 14px;

      .basket {
        padding-left: 10px;
      }

      p {
        border-right: 1px solid lightgray;
        padding-right: 20px;
      }

      span {
        color: darkblue;
      }
    }

    form {
      display: flex;
      border: 1px solid lightgray;
      border-radius: var(--radius);

      input {
        border: none;
        width: 400px;
        height: 35px;
      }

      input:focus {
        outline: none;
      }
    }
  }
`;

export default Navbar;
