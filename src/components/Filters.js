import React, { useEffect } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice } from "../utils/helpers";

const Filters = () => {
  // console.log('useFilterContext>>>>>>>>', useFilterContext());
  // const {
  //   filters: {
  //     text,
  //     category,
  //     company,
  //     color,
  //     min_price,
  //     price,
  //     max_price,
  //     shipping,
  //   },
  //   updateFilters,
  //   clearFilters,
  //   all_products,
  // } = useFilterContext();

  // // Gets unique list of data
  // const getUniqueList = (data, type) => {
  //   let list = data.map((item) => item[type]);

  //   if (type === "colors") {
  //     list = list.flat();
  //   }

  //   return ["all", ...new Set(list)]; //returns a new list with unique values
  // };

  // // Gets a unique array of categories, companies and colors
  // let categories = getUniqueList(all_products, "category");
  // let companies = getUniqueList(all_products, "companies");
  // let colors = getUniqueList(all_products, "colors");

  return (
    <Container>
      <h4>Colors</h4>
      <hr />

    </Container>
  );
};

const Container = styled.div``;

export default Filters;
