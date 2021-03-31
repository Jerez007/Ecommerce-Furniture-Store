import React, { useEffect } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice } from "../utils/helpers";

const Filters = () => {
  console.log('useFilterContext>>>>>>>>', useFilterContext());
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      highest_price,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  // Gets unique list of data
  const getUniqueList = (data, type) => {
    let list = data.map((item) => item[type]);

    if (type === "colors") {
      list = list.flat();
    }

    return ["all", ...new Set(list)]; //returns a new list with unique values
  };

  // // Gets a unique array of categories, companies and colors
  let categories = getUniqueList(all_products, "category");
  let companies = getUniqueList(all_products, "companies");
  let colors = getUniqueList(all_products, "colors");

  return (
    <Container>
      <div className="btn-container">
        <button type="button">Hide Filters</button>

        <button type="button">Clear Filters</button>
      </div>

      {/* colors filter*/}
      <div className="filter-container">
        <h4>Category</h4>
        <hr />
        {categories.map((category, index) => {
          return <button key={index}>{category}</button>
        })}
      </div>
      {/* end of color filters */}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 10px;

  .btn-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  hr {
    margin-top: 7px;
    height: 1px;
    margin-right: 10px;
  }

  button {
    padding: 7px 10px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    outline: none;
    color: var(--clr-primary-3);
    width: 100px;
  }
`;

export default Filters;
