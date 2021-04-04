import React from "react";
import { useFilterContext } from "../context/filter_context";
import Gridview from "./Gridview";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // if no products match the filter
  if (products.length < 1) {
    return <h5 className="error-product">Sorry, no products matched your search...</h5>;
  }

  // Display list view if list view is selected
  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <Gridview products={products}>product list</Gridview>;
};


export default ProductList;
