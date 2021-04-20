import React from "react";
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from "./components/Posts/posts"
import Form from "./components/Form/Form"
import { BrowserRouter, Route } from "react-router-dom";
import contactForm from "../src/components/Contact/contactForm";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Footer from "./components/Footer"; //ne pas la retirer !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Forum from "./components/Forum/forum2";
import About from "./components/About";
import Annuaire from "./components/Annuaire";
import SignUp from "./components/SignUp"
/* import annuaires from "./images/annuaires.png" */

/* import inscription from "./components/Inscription/inscription";
 */
/* import Login from "./components/Login/login";
 */ import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SujetForm from "./components/Sujet/sujet";
import SignIn from "./components/SignIn";



const App = () => {
  return (
    <Container maxWidth="lg" position="static" color="inherit">
     



    <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path="/" component={Index} />
      <Route exact path="/contact" component={contactForm} />

      <Route exact path="/forum" component={Forum} />
      <Route exact path="/annuaire" component={Annuaire} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signUp" component={SignUp}/>
      
      <Route exact path="/sujetform" component={SujetForm}/>

     <Route exact path="/signin" component={SignIn}/> 
      {/*         <Route exact path='/inscription' component={inscription} />
       */}
       

    <Footer></Footer>
    </BrowserRouter>
    </Container>

  );
};

export default App;
