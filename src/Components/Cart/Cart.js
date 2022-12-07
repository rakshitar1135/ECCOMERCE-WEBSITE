import classes from './Cart.module.css'
import Modal from '../../UI/Modal';
import React,{useContext} from 'react';
import CartContext from '../Store/CartContext';

const Cart = (props) => {
  const cartCtx=useContext(CartContext)
  console.log(cartCtx.items)
   const CartItems = (
     <ul className={classes["cart-items"]}>
        {cartCtx.items?.map((item) => (
          <li>
            {<img className= {classes.img} src={item.imageUrl} alt="Some pic"></img>} {item.title}
           {item.price} {item.quantity}
           <button> Remove </button>
          </li>
        ))}
     </ul>
    );
   
    return (
      <Modal>
        <section className={classes.section}>
          <span> CART </span>
          <button onClick={props.onClose}> x </button>
        </section>
        <div className={classes.div}>
          <span> ITEM </span>
          <span> PRICE </span>
          <span> QUANTITY </span>
        </div>
        {CartItems}
        <h2 className={classes.h2}> Total</h2>
  
        <button className={classes.button}>PURCHASE </button>
      </Modal>
    );
  };
  
  export default Cart;