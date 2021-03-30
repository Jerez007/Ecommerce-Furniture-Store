import React from "react";
import { useFilterContext } from "../context/filter_context";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import styled from "styled-components";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    increasing,
    increaseDecreaseToggle,
    sort, updateSort,
  } = useFilterContext();

  return (
    <Container>
      {/* Sort by options */}
      <form>
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort" className="sort-input" value={sort} onChange={updateSort}>
          <option value="product-name">Product Name</option>
          <option value="price">Price</option>
        </select>
      </form>

      <div className="increasing-decreasing">
        {increasing && (
          <button type="button" onClick={increaseDecreaseToggle}>
            <ArrowUpwardIcon fontSize="small" />
          </button>
        )}

        {!increasing && (
          <button type="button" onClick={increaseDecreaseToggle}>
            <ArrowDownwardIcon fontSize="small" />
          </button>
        )}
      </div>

      {/* Contains the grid and list view buttons */}
      <div className="btn-container">
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <ViewListIcon fontSize="large" />
        </button>

        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <ViewComfyIcon fontSize="large" />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  button {
    border: transparent;
    background-color: white;
    text-decoration: none;
    outline: none;
  }

  .active {
    color: var(--clr-primary-3);
    border: black;
  }
`;

export default Sort;
