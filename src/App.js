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
import SignIn from './components/pages/SignIn';
import Music from './components/pages/Music';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/artists' component={Artists} />
        <Route path='/about' component={About} />
        <Route path='/music' component={Music} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
