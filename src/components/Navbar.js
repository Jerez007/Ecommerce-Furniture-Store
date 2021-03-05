import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import logo from "../assets/logo.png";

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

          <p className="location">
            My store: <span>Burnaby</span>
            <br />
            <span>(Granville St.), BC</span><br/>
            10:00-18:00
          </p>
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
    margin-top: -17px;

    img {
      width: 120px;
      height: 50px;
      margin-left: 30px;
    }

    .location {
      color: gray;
      text-align: right; 
      
      span {
        color: darkblue; 
      }
    }

    form {
      display: flex;
      border: 1px solid grey;
      border-radius: 3px;

      input {
        border: none;
        width: 400px;
        height: 40px;
      }

      input:focus {
        outline: none;
      }
    }
  }
`;

export default Navbar;
