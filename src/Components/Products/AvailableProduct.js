import React from 'react'
import Product from "./Product";


import classes from './AvailableProducts.module.css'

const AvailableProducts = () => {
  
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
 

  return (
    <section className={classes.wraper}>
      <ul>
        {productsArr.map((prod) => {
          return (
            <Product
              
              key={Math.random()}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.imageUrl}
              quantity= {1}
              _id= {prod._id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableProducts;