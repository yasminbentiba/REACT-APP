import React, { Component } from "react";
import "./Style.css";
import { FormGroup, FormControl, Alert } from "react-bootstrap";
import "whatwg-fetch";
import browserHistory from "../../Router/browserHistory";
import {
  MenuItem,
  Button,
  RadioGroup,
  Select,
  Grid,
  Avatar,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeRadioUser = this.handleChangeRadioUser.bind(this);
    this.handleChangeRadioPrestatair = this.handleChangeRadioPrestatair.bind(
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
      firstname: "",
      lastname: "",
      signInLoading: false,
      show: false,
      signupStatus: "success",
      signUpMessage: "You have signed up successfully. Proceed to login.",
      user: true,
      prestataire: false,
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
    this.setState({ firstname: e.target.value });
  }

  handleChangeLastName(e) {
    this.setState({ lastname: e.target.value });
  }

  handleDismiss() {
    this.setState({ show: false });
  }
  handleChangeRadioPrestatair() {
    this.setState({ user: false, prestataire: true });
  }
  handleChangeRadioUser() {
    this.setState({ user: true, prestataire: false });
  }
  handleShow() {
    this.setState({ show: true });
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
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
    };

    fetch("http://localhost:5000" + "/api/account/signup", {
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
            signInLoading: false,
            show: true,
            signupStatus: "success",
            signUpMessage: "You have signed up successfully. Proceed to login.",
            firstname: "",
            lastname: "",
            password: "",
            confPass: "",
            email: "",
          });
          browserHistory.push("/SignIn");
        } else if (json.message === "Error: Account Already Exists") {
          this.setState({
            signInLoading: false,
            show: true,
            signupStatus: "warning",
            signUpMessage: "Account already Exists. Procced to login",
            firstname: "",
            lastname: "",
            password: "",
            confPass: "",
            email: "",
          });
        } else if (json.message === "Error: Server Error") {
          this.setState({
            signInLoading: false,
            show: true,
            signupStatus: "danger",
            signUpMessage: "Unexpected error. Please try again later.",
            firstname: "",
            lastname: "",
            password: "",
            confPass: "",
            email: "",
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
          <FormGroup controlId="signUpName">
            <FormControl
              className="name transparence"
              type="text"
              value={this.state.firstname}
              placeholder="First Name"
              onChange={this.handleChangeFirstName} //pour changer le nom puis on définie le bind pour la fonction
              required
            />
            <br />
            <FormControl
              className="name transparence"
              type="text"
              value={this.state.lastname}
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
                  onChange={this.handleChangeRadioUser}
                />
                User
              </label>
            </div>
            <div className="prestataire">
              <label>
                <input
                  type="radio"
                  checked={this.state.prestataire}
                  onChange={this.handleChangeRadioPrestatair}
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
                <select value={this.state.value} className="transparence">
                  <option value="grapefruit">Atelier mécanique</option>
                  <option value="lime">Atelier électricité</option>
                  <option value="mango">Atelier tolerie</option>
                  <option value="grapefruit">Concessionnaire </option>
                  <option value="lime">Atelier peintures auto</option>
                  <option value="coconut">Atelier service rapide</option>
                  <option value="mango"> Pièce carrosorie</option>
                  <option value="coconut">Pièces détachées</option>
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
