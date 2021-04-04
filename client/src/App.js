import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Contact, Footer, Navbar, Sidebar } from './components';
import FooterMenu from './components/FooterMenu';
import SocialMedia from './components/SocialMedia';
import { Home, Error, SingleProduct, ProductsPage, CartPage, CheckoutPage, WriteReviewPage } from "./pages";

function App() {
  return (
      <Router>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products">
            <ProductsPage />
            <Contact />
          </Route>

          <Route exact path="/products/kitchen">
            <ProductsPage />
            <Contact />
          </Route>

          <Route exact path="/products/diningroom">
            <ProductsPage />
            <Contact />
          </Route>

          <Route exact path="/products/livingroom">
            <ProductsPage />
            <Contact />
          </Route>

          <Route exact path="/products/office">
            <ProductsPage />
            <Contact />
          </Route>

          <Route exact path="/products/bedroom">
            <ProductsPage />
            <Contact />
          </Route>

          <Route exact path="/products/review/:id">
            <WriteReviewPage />
            <Contact />
          </Route>

          <Route exact path="/products/:id" children={<SingleProduct />} />

          <Route exact path="/cart">
            <CartPage />
            <Contact />
          </Route>

          <Route exact path="/checkout">
            <CheckoutPage />
            <Contact />
          </Route>

          <Route exact path="*">
            <Error />
          </Route>
        </Switch>

        <FooterMenu />
        <SocialMedia />
        <Footer />
      </Router>
  );
}

export default App;
