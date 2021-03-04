import React from "react";
import styled from "styled-components";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";

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
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  .nav-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--clr-primary-1);
    color: white;
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
`;

export default Navbar;
