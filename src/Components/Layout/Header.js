import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.container}>
          <NavLink className={classes.navlink} to="/store">
            <span>STORE</span>
          </NavLink>
          <NavLink className={classes.navlink} to="/home">
            <span>HOME</span>
          </NavLink>
          <NavLink className={classes.navlink} to="/about">
            <span>ABOUT</span>
          </NavLink>
        </div>
        <button className={classes.button} onClick={props.onShowCart}>
          Cart
        </button>
        <span> 3 </span>
      </header>
    </Fragment>
  );
};

export default Header;
