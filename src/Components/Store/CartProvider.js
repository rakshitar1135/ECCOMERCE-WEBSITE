import React,{useState} from "react";
import CartContext from "./CartContext";

const CartProvider=props=>{
const[items,setItems]=useState([]);
const addItemToCartHandler=(item)=>{
let hasItems=false
const newArray=[...items]
newArray.forEach(Element=>{ 
    if(Element.title===item.title){
        hasItems=true
    }
})
if(hasItems===true){
    alert('item exsists')
}
else{
    setItems([...items,item])
}
};
const removeItemFromCartHandler=(id)=>{};

const cartContext={
    items:items,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    message:'hi i am here'
};
return<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
};
export default CartProvider