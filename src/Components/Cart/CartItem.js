
import { Fragment, useContext } from "react";
import CartContext from "../Store/CartContext";
import classes from './cartItem.module.css'


const CartItem = (props) => {
  
  const cartCntx = useContext(CartContext);
  const onAddHandler = () => {
    console.log(props);
    cartCntx.addItem(props);
  };

 

  return (
    <li id={`cart-item-${props.id}`}>
      <Fragment>
        <h2 className={classes.title}>{props.title}</h2>
        <img src={props.img} alt="Icon" className={classes.img}></img>
        <span className={classes.price}> ${props.price}</span>
        <span> x {props.quantity}</span>
        <button onClick={onAddHandler} className={classes.button}>
          +
        </button>
        <button className={classes.button}>
          -
        </button>
      </Fragment>
    </li>
  );
};
export default CartItem;