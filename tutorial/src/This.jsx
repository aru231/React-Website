import React from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from './Navbar';
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
const This = () => {
  return (
    <React.Fragment>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
      </Switch>
  
      
    </React.Fragment>
  );
};

export default This;
