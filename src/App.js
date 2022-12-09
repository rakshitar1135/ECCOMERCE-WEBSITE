import React, { useState} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products"
import Cart from "./Components/Cart/Cart";
import CartProvider from './Components/Store/CartProvider';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import ProductDetail from "./Components/Products/ProductDetails";
import classes from "./Components/Layout/Header.module.css"
import Footer from './Components/Layout/Footer';
import Contact from './Components/Contact/Contact';


function App() {


  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <h1 className={classes.h1}> The Generics </h1>
      <main>
        <Switch>
        <Route path="/" exact>
            <Home/>
          </Route>
          
          <Route path="/store" exact>
            <Products />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contact_us">
            <Contact />
          </Route>

          <Route path="/store/:productDetails">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartProvider>
  );
}
export default App;

