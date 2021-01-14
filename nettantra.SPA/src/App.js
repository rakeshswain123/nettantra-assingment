import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Signin from './Signin';
import Signup from './Signup';
import Navbar from './Navbar';
import Footer from './Footer';
import Signindone from './Signindone';
import {Switch, Route, Redirect, Router} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/signindone" component={Signindone}/>
        <Redirect to="/"/>
      </Switch>
      <Footer />
    </>  
  );
}

export default App;
