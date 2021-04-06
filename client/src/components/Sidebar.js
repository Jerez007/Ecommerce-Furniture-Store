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
  const { isSidebarOpen, toggleSidebar } = useProductsContext();
  const { updateFilters } = useFilterContext();

  const clickHandler = () => {
    toggleSidebar();
    updateFilters();
  };

  return (
    <SidebarContainer>
      <div className={`${isSidebarOpen ? "sidebar" : "hideSidebar"}`}>
        {/* <div className="all">
          <DoneOutlinedIcon />
          <span>all products</span>
        </div> */}

        <Link to="/products/" className="category">
          <DoneOutlinedIcon />
          <button type="button" name="category" onClick={clickHandler}>
            all
          </button>
        </Link>

        <Link to="/products/livingroom" className="category">
          <WeekendOutlinedIcon />
          <button type="button" name="category" onClick={updateFilters}>
            living room
          </button>
        </Link>

        {/* <div className="livingroom" name="category" onClick={updateFilters}>
          <WeekendOutlinedIcon />
          <span>living room</span>
        </div> */}

        <Link to="/products/kitchen" className="category">
          {/* <div
            className="kitchen"
            name="category"
            value="kitchen"
            onClick={updateFilters}
          >
            <KitchenOutlinedIcon />
            <span>kitchen</span>
          </div> */}
          <KitchenOutlinedIcon />
          <button type="button" name="category" onClick={updateFilters}>
            kitchen
          </button>
        </Link>

        <Link to="/products/diningroom" className="category">
          <LocalDiningOutlinedIcon />
          <button type="button" name="category" onClick={updateFilters}>
            dining room
          </button>
        </Link>

        <Link to="/products/bedroom" className="category">
          <HotelOutlinedIcon />
          <button type="button" name="category" onClick={updateFilters}>
            bedroom
          </button>
        </Link>

        <Link to="/products/office" className="category">
          <HomeWorkOutlinedIcon />
          <button type="button" name="category" onClick={updateFilters}>
            office
          </button>
        </Link>
        {/* <div className="dining" name="category" onClick={updateFilters}>
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
        </div> */}
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-decoration: none;

  /* sidebar */
  .sidebar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    color: #545454;
    transition: all 0.3s linear;

    .category {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #f6f6f6;
      padding: 15px;
      color: var(--clr-primary-3);
    }
  }
  /* end of sidebar section*/

  /* hides sidebar */
  .hideSidebar {
    display: none;
  }

  button {
    outline: none !important;
    background-color: white;
    border: none;
    text-transform: capitalize;
  }

  /* media queries */
  @media screen and (min-width: 766px) {
    .sidebar {
      display: none !important;
    }
  }
`;

export default Sidebar;
