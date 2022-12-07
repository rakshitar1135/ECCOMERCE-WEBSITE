import {Route,Switch} from 'react-router-dom'
import {React,useState} from 'react'
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products"
import Cart from "./Components/Cart/Cart";
import CartProvider from './Components/Store/CartProvider';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import ProductDetail from './Components/Products/ProductDetail';
import classes from "./Components/Layout/Header.module.css"
import Footer from './Components/Layout/Footer';

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
      <h1 className={classes.h2}> The Generics </h1>
      <main>
        <Switch>
          <Route path="/store">
            <Products />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>


          <Route path="/store/:productDetails">
            <ProductDetail/>
          </Route>
        </Switch>
      </main>
     <Footer/>
    </CartProvider>
  );
}
export default App;
