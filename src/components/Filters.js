import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice } from "../utils/helpers";

const Filters = () => {
  const {
    filters: { category, company, min_price, price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  // Gets unique list of data
  const getUniqueList = (data, type) => {
    let list = data.map((item) => item[type]);

    // if (type === "colors") {
    //   list = list.flat();
    // }

    return ["all", ...new Set(list)]; //returns a new list with unique values
  };

  // // Gets a unique array of categories, companies and colors
  let categories = getUniqueList(all_products, "category");
  categories.splice(categories.length - 1, 1);
  let companies = getUniqueList(all_products, "company");
  // let colors = getUniqueList(all_products, "colors");

  return (
    <Container>
      <div className="btn-container">
        <button type="button">Hide Filters</button>

        <button type="button" className="clear-btn" onClick={clearFilters}>Clear Filters</button>
      </div>

      {/* categories filter*/}
      <div className="filters-container">
        <h4>Category</h4>
        <hr />
        {categories.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              name="category"
              onClick={updateFilters}
              className={`${category === item.toLowerCase() ? "active" : null}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* end of categories filter */}

      {/* companies filter */}
      <div className="filters-container">
        <h4>Company</h4>
        <hr />
        {/* <select name="company" value={company} onChange={updateFilters}>
          {companies.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select> */}
        {companies.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              name="company"
              onClick={updateFilters}
              className={`${company === item.toLowerCase() ? "active" : null}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* end of companies filter */}

      {/* price filter */}
      <div className="filter-container">
        <h4>Price</h4>
        <hr />
        <p>{formatPrice(price)}</p>
        <input
          type="range"
          name="price"
          min={min_price}
          max={max_price}
          value={price} 
          onChange={updateFilters}
        ></input>
      </div>
      {/* end of price filter */}
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
    margin-bottom: 7px;
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

  .filters-container {
    margin-bottom: 20px;

    button {
      margin: 5px;
    }
  }

  .active {
    border: 3px solid var(--clr-primary-3);
  }

  .clear-btn {
    background-color: red;
    color: white;
  }
`;

export default Filters;
