import React, { Fragment } from "react";
import AvailableProducts from "./AvailableProduct";
import classes from './Products.module.css'

const Products = (props) => {
  return (
    <Fragment>
      <h2 className={classes.music}> COLORS </h2>
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;