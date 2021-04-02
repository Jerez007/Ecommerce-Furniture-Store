import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Contact, Footer, Navbar, Sidebar } from './components';
import FooterMenu from './components/FooterMenu';
import SocialMedia from './components/SocialMedia';
import { Home, Error, SingleProduct, ProductsPage, CartPage } from "./pages";

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

        <Route exact path="/products/:id" children={<SingleProduct />} />

        <Route exact path="/cart">
          <CartPage />
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
