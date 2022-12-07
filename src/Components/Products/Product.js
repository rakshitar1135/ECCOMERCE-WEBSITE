import React, { Fragment,useContext} from "react";
import classes from "./Product.module.css";
import CartContext from "../Store/CartContext";
const Product = (props) => {
  const cartcntx=useContext(CartContext)
  console.log(props)
  const addItemToCart=(items)=>{
  console.log(items)
  
  cartcntx.items.push(items)
  
  console.log(cartcntx.items)
  } 
  return (
    <Fragment>
    
      <li className={classes.list}>
        <section>
          <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some Images"></img>
            <h1>{props.price}</h1>
            <button className={classes.button1} onClick={()=>addItemToCart(props)}  >
                Add To Cart
            </button>
          </div>
        </section>
      </li>
    </Fragment>
  )
}

export default Product;
