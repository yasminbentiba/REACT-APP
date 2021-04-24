import React, { Component } from "react";

import Home from "../Home";
import About from "../About";
import Annuaire from "../Annuaire";
import Forum2 from "../Forum/forum2";

/* 
import Slideshow from '../slide/slide'; */

import SocialMedia from "../SocialMedia";

class Index extends Component {
  render() {
    return (
      <div>
        
        <Home/>
        {/* <Slideshow/> */}
        <Annuaire/>
        <Forum2/>

        <About/>
        <SocialMedia/>
      
      </div>
    );
  }
}

export default Index;
