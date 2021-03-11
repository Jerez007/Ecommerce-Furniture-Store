import React from "react";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import styled from "styled-components";
import { House } from "@material-ui/icons";

const Guarantee = () => {
  return (
    <GuaranteeContainer>
      <div className="content-center">
        <div>
          <BookmarksOutlinedIcon fontSize="large" />
          <span>flyer</span>
        </div>

        <div>
          <HouseOutlinedIcon fontSize="large" />
          <span>free curbside pickup</span>
        </div>

        <div>
          <ForumOutlinedIcon fontSize="large" />
          <span>blog</span>
        </div>

        <div>
          <PinDropOutlinedIcon fontSize="large" />
          <span>find stores</span>
        </div>
      </div>
    </GuaranteeContainer>
  );
};

const GuaranteeContainer = styled.div`
  .MuiSvgIcon-root {
    color: #909090;
  }

  .content-center {
    display: flex;
    justify-content: space-evenly;
    color: #909090;
    padding: 10px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: uppercase;
      font-size: 12px;
      color: #585858;
      font-weight: bold;
    }
    span {
      margin-top: 6px;
    }
  }

  /* media queries */
  @media screen and (max-width: 769px) {
    .content-center {
      display: grid;
      grid-template-columns: 1fr 1fr;

      div {
        padding: 20px;
      }
    }
  }

  @media screen and (max-width: 399px) {
    span {
      text-align: center;
    }
  }
`;

export default Guarantee;
