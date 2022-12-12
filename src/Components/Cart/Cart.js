import classes from './Cart.module.css'
import Modal from '../../UI/Modal';
import React,{useContext} from 'react';
import CartContext from '../Store/CartContext';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCntx = useContext(CartContext);


  let totalAmount = 0;
  cartCntx?.items?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx?.items?.map((item) => (
        <li>
          <CartItem
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            _id={item._id}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
        <button className={classes.cancel} onClick={props.onClose}>
          x
        </button>
      </section>
      <div className={classes.div}>
        <span> ITEM </span>
        <span> PRICE </span>
        <span> QUANTITY </span>
      </div>
      {cartItems}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;