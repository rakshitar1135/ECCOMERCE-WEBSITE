import React, { Fragment } from "react";
import classes from "./Product.module.css";
const Product = (props) => {
  return (
    <Fragment>
      <li className={classes.list}>
        <section>
          <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some Images"></img>
            <h1>{props.price}</h1>
            <button className={classes.button1}>
                Add To Cart
            </button>
          </div>
        </section>
      </li>
    </Fragment>
  )
}

export default Product;
