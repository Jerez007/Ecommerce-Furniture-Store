import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Search } from "@material-ui/icons";

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
            <PinDropOutlinedIcon fontSize="medium" />
            <p>Find a store</p>
          </div>
        </div>

        <div className="nav-search">
          {/* Toggle button only visible for smaller screens */}
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>

          <Link to="/">
            <img src={logo} alt="logo furniture" />
          </Link>

          <form action="" className="desktop-search">
            <input type="text" placeholder="Type here to search" />
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
              10:00-18:00
            </p>

            <ShoppingCartOutlinedIcon className="basket" fontSize="large" />
          </div>
        </div>

        {/* Search bar moves for devices 756px or less */}

        <form action="mobile-search">
          <input type="text" placeholder="Type here to search" />
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
    width: 100vw;
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

  .mobile-search {
    width: 100%;

    input {
      width: 100%;
    }
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

  .nav-right p:hover {
    border-bottom: 1px white solid;
  }

  .nav-toggle {
    display: none;
    background: transparent;
    border: transparent;
    color: gray;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
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
      border-radius: 2px;
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

    @media screen and (max-width: 765px) {
      .desktop-search {
        display: none;
      }
    }

    @media screen and (min-width: 766px) {
      .mobile-search {
        display: none !important;
      }
    }
  }
`;

export default Navbar;
