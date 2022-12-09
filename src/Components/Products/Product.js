import React, { Fragment,useContext} from "react";
import classes from "./Product.module.css";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
const Product = (props) => {
  const cartcntx=useContext(CartContext)
  const addItemToCart=(event)=>{
   event.preventDefault();
   cartcntx.addItem({title:props.title,price:props.price,imageUrl:props.image,Qty:1})
  }
   
  return (
    <Fragment>
    
      <li className={classes.list}>
      <Link to="/store/p3"> 
        <section>
          <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some Images"></img>
            <h1>{props.price}</h1>
            <button className={classes.button1} onClick={addItemToCart} >
                Add To Cart
            </button>
          </div>
        
        </section>
        </Link>
      </li>
    </Fragment>
  )
}


export default Product;
