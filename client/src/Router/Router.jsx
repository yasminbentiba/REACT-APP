import { Component } from "react";
import browserHistory from '../Router/browserHistory';
import SignUp from "../signUp2/SignUp";
import SignIn from "../signin/SignIn";
import { Router, Route, Switch } from "react-router-dom";
import Annuaire from "../Annuaire/annuaire";
import AtelierElectrique from "../Annuaire/annuaireElectrique";
import Forum from "../components/Forum";
import ContactForm from "../components/Contact/contactForm";
import signUp from "../components/Inscription/SignUp";



class AppRouter extends Component {
    render() {

        /* tekhdem les fct elli besh test7a9hom 9bal l return */
        return (

            <Router history={browserHistory}>

                {/* signUp */}
                <Switch>
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/signup" component={signUp} />
  
                    <Route path="/SignIn" component={SignIn} />
        
                    <Route path="/Forum" component={Forum} />
            
                    <Route path="/Contact" component={ContactForm} />
               
                <Route path="/Annuaire" component={Annuaire}/>
                
                <Route path="/AtelierElectrique" component={AtelierElectrique}/>
                </Switch> 

            </Router>
        );
    }
}
export default AppRouter;