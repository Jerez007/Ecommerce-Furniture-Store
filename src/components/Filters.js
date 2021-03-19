import React, { useEffect } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice } from "../utils/helpers";

const Filters = () => {
  const { all_products } = useFilterContext();

  // let test;

  // // Gets unique list of data
  // const getUniqueList = (data, type) => {
  //   let list = data.map((item) => item[type]);
  //   test = list;
  // };

  // useEffect(() => {
  //   getUniqueList(all_products, "category");
  //   console.log(">>>>>>>>>>>>>>>>>>>", test);
  // });

  return (
    <Container>
      <h4>Colors</h4>
      <hr />
    </Container>
  );
};

const Container = styled.div``;

export default Filters;
