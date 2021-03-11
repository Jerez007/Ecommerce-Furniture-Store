import React from "react";
import styled from "styled-components";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import KitchenOutlinedIcon from "@material-ui/icons/KitchenOutlined";
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined';
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";

function Sidebar() {
  let isOpen = true;

  return (
    <SidebarContainer>
      <div className="sidebar">
        <div className="all">
          <DoneOutlinedIcon />
          <span>all products</span>
        </div>

        <div className="livingroom">
          <WeekendOutlinedIcon />
          <span>living room</span>
        </div>

        <div className="kitchen">
          <KitchenOutlinedIcon />
          <span>kitchen</span>
        </div>

        <div className="dining">
          < LocalDiningOutlinedIcon/>
          <span>Dining room</span>
        </div>

        <div className="bedroom">
          <HotelOutlinedIcon />
          <span>bedroom</span>
        </div>

        <div className="office">
          <HomeWorkOutlinedIcon />
          <span>office</span>
        </div>
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  .sidebar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    color: #545454;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #f6f6f6;
      padding: 15px;
    }
  }

  @media screen and (min-width: 766px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
