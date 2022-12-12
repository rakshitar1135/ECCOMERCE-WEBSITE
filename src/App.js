import { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import ProductDetail from "./Components/Products/ProductDetails";
import classes from "./Components/Layout/Header.module.css";
import Contact from "./Components/Contact/Contact";
import AuthContext from "./Components/Store/Auth-Context";
import AuthForm from "./Components/Authentication/Authentication";
import Footer from "./Components/Layout/Footer";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const authCtx = useContext(AuthContext);

  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  console.log(authCtx.isLoggedIn);

  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler} />}

      {authCtx.isLoggedIn && <Header onShowCart={showCartHandler} />}
      <h1 className={classes.h1}> The Generics </h1>
      <main>
        <Switch>
          {authCtx.isLoggedIn && (
            <Route path="/" exact>
              <Home />
            </Route>
          )}
          <Route path="/" exact>
            <AuthForm />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" exact>
              <AuthForm />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/store" exact>
              <Products />
            </Route>
          )}

          {authCtx.isLoggedIn && (
            <Route path="/about">
              <About />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/" exact>
              <Home />
            </Route>
          )}
          <Route path="/contact_us">
            <Contact />
          </Route>

          <Route path="/store/:productDetails">
            <ProductDetail />
          </Route>

          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
