import React from "react";
import classes from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  console.log(params.productDetails);
  return (
    <div className={classes.wraper}>
      <img
        src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        alt="Website"
      ></img>
      <h1>COLOURS</h1>
      <p>
        Color is an important part of everyday life. Bring the importance of
        color up with people and there will seldom be any real disagreement.
        Most people agree that color is an important, even vital, part of life.
        However, there’s a larger question about how well people really
        understand that fact on a fundamental level. When people talk about the
        importance of color, it’s often in a somewhat abstract sense. People
        know that color is important. However, they can’t really express why
        color is important or what lack of it might mean to someone’s quality of
        life. This ambiguity makes the importance of color well worth delving
        into.
      </p>
      <p>{params.productDetails}</p>
    </div>
  );
};

export default ProductDetail;
