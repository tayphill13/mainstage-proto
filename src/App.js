import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Artists from './components/pages/Artists';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Music from './components/pages/Music';
import { AuthProvider } from './components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/artists' component={Artists} />
          <Route path='/about' component={About} />
          <Route path='/music' component={Music} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
