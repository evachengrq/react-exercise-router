import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header"
import Home from "./Home";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/my-profile" component = {Profile} />
      <Route exact path = "/about-us" component = {AboutUs} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
