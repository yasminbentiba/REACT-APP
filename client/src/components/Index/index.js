import React, { Component } from "react";

import Home from "../Home";
import About from "../About";
import Forum from "../Forum";
import Annuaire from "../Annuaire";

import SocialMedia from "../SocialMedia";

class Index extends Component {
  render() {
    return (
      <div>
        
        <Home/>
        
        <Annuaire/>
        <Forum/>
        <About/>
        <SocialMedia/>
      
      </div>
    );
  }
}

export default Index;
