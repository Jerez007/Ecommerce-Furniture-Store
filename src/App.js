import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Footer />
    </Router>
  );
}

export default App;
