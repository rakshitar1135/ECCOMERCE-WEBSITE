import React from "react";
import CartContext from "./CartContext";
const CartProvider=props=>{
const addItemToCartHandler=(item)=>{};
const removeItemFromCartHandler=(id)=>{};

const cartContext={
    items:[],
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    message:'hi i am here'
};
return<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
};
export default CartProvider