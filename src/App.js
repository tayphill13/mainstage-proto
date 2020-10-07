import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Artists from './components/pages/Artists';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Music from './components/pages/Music';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/artists' component={Artists} />
        <Route path='/about' component={About} />
        <Route path='/music' componentn={Music} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
