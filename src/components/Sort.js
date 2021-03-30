import React from 'react'
import { useFilterContext } from '../context/filter_context'
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

import styled from "styled-components";

const Sort = () => {
  const { filtered_products: products, grid_view} = useFilterContext()

  return (
    <Container>
      <div>Sort By</div>

      <div className="btn-container">
        <button type="button" className={`${!grid_view ? "active" : null}`}>
          <ViewListIcon fontSize="large" />
        </button>

        <button type="button" className={`${grid_view ? "active" : null}`}>
          <ViewComfyIcon fontSize="large" />
        </button>
      </div>
    </Container>
  );
}

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

export default Sort
