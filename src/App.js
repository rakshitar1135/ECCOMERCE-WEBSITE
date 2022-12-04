import React,{useState} from 'react'
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products"
import Cart from "./Components/Cart/Cart";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const HideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <div>
       {cartIsShown && <Cart onClose={HideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
      <Products/>
    </div>
  );
}

export default App

