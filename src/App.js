import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Footer, Header, Navbar, Sidebar } from './components';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <SocialMedia />
      <Footer />
    </Router>
  );
}

export default App;
