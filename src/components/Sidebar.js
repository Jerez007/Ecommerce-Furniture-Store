import React from "react";
import styled from "styled-components";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import KitchenOutlinedIcon from "@material-ui/icons/KitchenOutlined";
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined';
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import { useProductsContext } from "../context/products_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar} = useProductsContext()

  return (
    <SidebarContainer>
      <div className={`${isSidebarOpen ? 'sidebar' : 'hideSidebar'}`}>
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
  /* sidebar */
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
  /* end of sidebar section*/

  /* hides sidebar */
  .hideSidebar {
    display: none;
  }

/* media queries */
  @media screen and (min-width: 766px) {
    .sidebar {
      display: none !important;
    }
  }
`;

export default Sidebar;
