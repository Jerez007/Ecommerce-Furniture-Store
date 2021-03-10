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
            <div>
              <PersonOutlineRoundedIcon fontSize="large" />
              <p>Sign In</p>
            </div>

            <div>
              <PinDropOutlinedIcon fontSize="medium" />
              <p>Find a store</p>
            </div>
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
              <span className="hours">10:00-18:00</span>
            </p>

            <ShoppingCartOutlinedIcon className="basket" fontSize="large" />
          </div>
        </div>

        {/* Search bar moves for devices 756px or less */}
        <form action="" className="mobile-search">
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

  /* Element that contains the search bar for the desktop version*/
  .nav-search {
    display: flex;
    align-items: center;
    border: 1px solid #f1f1f1;

    /* sidebar for mobile */
    .nav-toggle {
      background: transparent;
      border: transparent;
      border-right: 1px solid #f1f1f1;
      padding-right: 5px;

      color: gray;
      cursor: pointer;
      margin-right: 10px;

      svg {
        font-size: 2rem;
      }
    }
    /* End of sidebar for mobile */

    form {
      display: flex;

      input {
        width: 410px;
        height: 45px;
        border-radius: 1px;
        border: 1px solid #e4e4e4;
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
  }
  /* End of element that contains search bar for desktop */

  /* Search bar for mobile */
  .mobile-search {
    display: flex;

    input {
      border: none;
      background-color: #e4e4e4;
      flex: 1;
      height: 45px;
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

  //  /* MEDIA QUERIES */
  @media screen and (max-width: 358px) {
    .nav-search {
      margin-bottom: 6px;
      border-bottom: 0px;
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
      margin-bottom: 8px;
      border-bottom: 0px;

      .location {
        margin-left: auto;
        margin-right: 10px;
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
  }
`;

export default Navbar;
