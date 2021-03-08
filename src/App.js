import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Footer, Header, Navbar, Sidebar } from './components';
import FooterMenu from './components/FooterMenu';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <FooterMenu />
      <SocialMedia />
      <Footer />
    </Router>
  );
}

export default App;
