import React, { Fragment, useContext, useState, useEffect } from "react";
import classes from "./Header.module.css";
import { NavLink,useHistory } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";
import CartContext from "../Store/CartContext";
const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const CartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setQuantity(CartCtx?.items?.length || 0);
  }, [CartCtx.items]);
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/auth')
  }
  return (
    <Fragment>
      <header className={classes.header}> 
        <NavLink to="/home" activeclassName={classes.active}>
          <span>HOME</span>
        </NavLink>
        <NavLink to="/about" activeclassName={classes.active}>
          <span>ABOUT</span>
        </NavLink>
        {authCtx.isLoggedIn && (
          <NavLink to="/store" activeclassName={classes.active}>
            <span>STORE</span>
          </NavLink>
        )}
        <NavLink to="/contact_us" activeclassName={classes.active}>
          <span>CONTACT</span>
        </NavLink>
        
        <button className={classes.button} onClick={props.onShowCart}>
          Cart {quantity}
        </button>
        <button classes={classes.logoutButton} onClick={logoutHandler}>LOGOUT</button>
      </header>
       
    </Fragment>
  );
};

export default Header;
