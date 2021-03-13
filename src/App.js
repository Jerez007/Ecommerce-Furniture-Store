import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components';
import FooterMenu from './components/FooterMenu';
import SocialMedia from './components/SocialMedia';
import {Home, Error, SingleProduct} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/products/:id" children={SingleProduct}/>

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
