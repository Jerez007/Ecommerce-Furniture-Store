import React from "react";
import styled from "styled-components";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import KitchenOutlinedIcon from "@material-ui/icons/KitchenOutlined";
import LocalDiningOutlinedIcon from "@material-ui/icons/LocalDiningOutlined";
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import { useProductsContext } from "../context/products_context";
import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { updateFilters } = useFilterContext();

  return (
    <SidebarContainer>
      <div className={`${isSidebarOpen ? "sidebar" : "hideSidebar"}`}>
        <div className="all">
          <DoneOutlinedIcon />
          <span>all products</span>
        </div>

        <div className="livingroom" name="category" onClick={updateFilters}>
          <WeekendOutlinedIcon />
          <span>living room</span>
        </div>

        <button
          type="button"
          className="kitchen"
          name="category"
          onClick={updateFilters}
        >
          <KitchenOutlinedIcon />
          <span>kitchen</span>
        </button>

        <div className="dining" name="category" onClick={updateFilters}>
          <LocalDiningOutlinedIcon />
          <span>Dining room</span>
        </div>

        <div className="bedroom" name="category" onClick={updateFilters}>
          <HotelOutlinedIcon />
          <span>bedroom</span>
        </div>

        <div className="office" name="category" onClick={updateFilters}>
          <HomeWorkOutlinedIcon />
          <span>office</span>
        </div>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  /* sidebar */
  .sidebar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    color: #545454;
    transition: all 0.3s linear;

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
