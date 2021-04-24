import React, { Component } from "react";
import "./signup.css";
import { FormGroup, FormControl, Alert } from "react-bootstrap";
import "whatwg-fetch";
import browserHistory from "../../Router/browserHistory";
import {
  RadioGroup,
  
  Avatar,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

  
    this.handleChangeRadio = this.handleChangeRadio.bind(
      this
    );
    
    this.handleChangeSelect = this.handleChangeSelect.bind(
      this
    );

    this.handleChange = this.handleChange.bind(this); //bind ----l'action qui va travailler avec le click

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);

    this.handleChangeLastName = this.handleChangeLastName.bind(this);

    this.handleDismiss = this.handleDismiss.bind(this);

    this.handleShow = this.handleShow.bind(this);

    this.signUpClicked = this.signUpClicked.bind(this);

    this.displayAlert = this.displayAlert.bind(this);

    //présenter mes fichers
    this.state = {
      password: "",
      email: "",
      confPass: "",
      firstName: "",
      lastName: "",
      signInLoading: false,
      show: false,
      signupStatus: "success",
      signUpMessage: "You have signed up successfully. Proceed to login.",
      user: true,
      prestataire: false,
      atelierType:""
    };
  }

  validateEmail() {
    if (this.state.email.length === 0) return null;
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(this.state.email).toLowerCase())
      ? "success"
      : "error";
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 8) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  getValidationStateConf() {
    const length = this.state.confPass.length;
    if (length === 0) return null;
    else if (this.state.password === this.state.confPass) return "success";
    else return "error";
  }

  //store de notre class on le prépare pour y on mettre de dans notre data
  // e est le param
  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeConfirm(e) {
    this.setState({ confPass: e.target.value });
  }

  handleChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  handleChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleDismiss() {
    this.setState({ show: false });
  }
  handleChangeRadio( ) {
    console.log('handleChangeRadio',this.state.prestataire,this.state.user);
    this.setState({ user: !this.state.user, prestataire: !this.state.prestataire});
  }
  handleShow() {
    this.setState({ show: true });
  }

  handleChangeSelect(event){
    console.log('value:',event.target);
    //this.setstate({})
  }

  displayAlert() {
    return (
      <Alert
        bsStyle={this.state.signupStatus}
        onDismiss={this.handleDismiss}
        id="alertBox"
      >
        <p>{this.state.signUpMessage}</p>
      </Alert>
    );
  }

  //la fonction signup pour creer un nouveau user
  signUpClicked(e) {
    this.setState({ signInLoading: true });
    const newUser = {
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role:  (this.state.user ? "user" : "prestataire")
    };

    fetch("http://localhost:4000"+"/users/add" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      //
      .then((res) => res.json()) // kif touselni  l resultat res n7awalha format json
      .then((json) => {
        if (json.message === "Signed Up") {
          this.setState({
            password: "",
      email: "",
      confPass: "",
      firstName: "",
      lastName: "",
      signInLoading: false,
      show: false,
      signupStatus: "success",
      signUpMessage: "You have signed up successfully. Proceed to login.",
      user: this.state.user,
      prestataire: this.state.prestataire,
      atelierType:""
          });
          browserHistory.push("/SignIn");
        } else if (json.message === "Error: Account Already Exists") {
          this.setState({
            signInLoading: false,
            show: true,
            signupStatus: "warning",
            signUpMessage: "Account already Exists. Procced to login",
            firstName: "",
            lastName: "",
            password: "",
            confPass: "",
            email: "",
            user: true,
            prestataire: false,
            atelierType:""
          });
        } else if (json.message === "Error: Server Error") {
          this.setState({
            signInLoading: false,
            show: true,
            signupStatus: "danger",
            signUpMessage: "Unexpected error. Please try again later.",
            firstName: "",
            lastnNme: "",
            password: "",
            confPass: "",
            email: "",
            user: this.state.user,
            prestataire:this.state.prestataire,
            atelierType:""
          });
        }
      });
  }
  render() {
    return (
      <div>
        <form className="formSignup">
          <Avatar className="avatar">
            <button disabled className="avatar">
              <LockOutlinedIcon />
            </button>
          </Avatar>
          <br />
          <FormGroup
          controlId="signUpFirstName" >
            <FormControl
              className="name transparence"
              type="text"
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.handleChangeFirstName} //pour changer le nom puis on définie le bind pour la fonction
              required
            /></FormGroup>
            <br />
            <FormGroup
            controlId="signUpLastName" >
            <FormControl
              className="name transparence"
              type="text"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.handleChangeLastName} //pour changer le nom puis on définie le bind pour la fonction
              required
            />
          </FormGroup>

          <FormGroup
            controlId="signUpEmail"
            validationState={this.validateEmail()}
          >
            <FormControl
              className="transparence"
              type="email"
              value={this.state.email}
              placeholder="Email"
              autoComplete="email"
              onChange={this.handleChangeEmail}
              required
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId="formBasicTextSignupPass"
            validationState={this.getValidationState()}
          >
            <FormControl
              className="transparence"
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId="formBasicTextSignupConfPass"
            validationState={this.getValidationStateConf()}
          >
            <FormControl
              className="transparence"
              type="password"
              value={this.state.confPass}
              placeholder="Confirm Password"
              onChange={this.handleChangeConfirm}
              required
            />
            <FormControl.Feedback />
          </FormGroup>

          <RadioGroup className="radio">
            <div className="user">
              <label>
                <input
                  type="radio"
                  checked={this.state.user}
                  onChange={this.handleChangeRadio}
                />
                User
              </label>
            </div>
            <div className="prestataire">
              <label>
                <input
                  type="radio"
                  checked={this.state.prestataire}
                  onChange={this.handleChangeRadio}
                />
                Prestataire
              </label>
            </div>
          </RadioGroup>
          {this.state.prestataire && (
            <FormGroup
              controlId="formBasicTextSignupPass"
              validationState={this.getValidationState()}
            >
              <label>
                Type d'atelier:
                <select value={this.state.value} onChange={this.handleChangeSelect} className="transparence">
                  <option value="atelierMecanique">Atelier mécanique</option>
                  <option value="atelierElectrique">Atelier électricité</option>
                  <option value="atelierTolerie">Atelier tolerie</option>
                  <option value="concessionnaire">Concessionnaire </option>
                  <option value="atelierTeinture">Atelier peintures auto</option>
                  <option value="atelierServiceRapide">Atelier service rapide</option>
                  <option value="pieceCarroserie"> Pièce carrosorie</option>
                  <option value="pieceDetachee">Pièces détachées</option>
                </select>
              </label>
              <br /> <br />
              <label for="myfile">Selectionnez votre logo ici :</label>
              <input type="file" id="myfile" name="myfile" />
              <FormControl
                className="transparence"
                type="url"
                placeholder="Votre lien vers l'atelier"
                /* onChange={} */
              />
              <FormControl.Feedback />
              <br />
            </FormGroup>
          )}

          <button
            className="btnSignup "
            disabled={this.state.signInLoading}
            onClick={this.state.signInLoading ? null : this.signUpClicked}
          >
            {this.state.signInLoading ? "Processing..." : "Sign Up"}
          </button>

          {this.state.show ? this.displayAlert() : null}

          <p>
            Avey-vous déjà un compte? <a href="./signin">se connecter.</a>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
