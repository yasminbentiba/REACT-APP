import React, { Component } from 'react';
import './Style.css';
import { Avatar } from "@material-ui/core";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  FormGroup,
  FormControl,
  
  Alert,
 
} from 'react-bootstrap';
import 'whatwg-fetch';
import {
  setInStorage,
} from '../../utils/storage';
import RESTAPIUrl from '../../config/config';
import browserHistory from '../../Router/browserHistory';
class SignIn extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.logInClicked = this.logInClicked.bind(this);

    this.handleDismiss = this.handleDismiss.bind(this);

    this.handleShow = this.handleShow.bind(this);


    this.displayAlert = this.displayAlert.bind(this);

    this.state = {
      password: '',
      email: '',
      logInLoading: false,
      signInError: '',
      show: false,
      logInStatus: 'danger',

    };
  }

  validateEmail() {
    if (this.state.email.length === 0) return null;
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(this.state.email).toLowerCase()) ? 'success' : 'error';
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 8) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  logInClicked() {
    const {
      email,
      password,
    } = this.state;

    this.setState({
      logInLoading: true,
    });

    fetch(RESTAPIUrl + '/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('the_login_n_signup', { token: json.token, name: json.name, email: email });
          this.setState({
            signInError: 'Welcome ' + json.name + '!',
            logInLoading: false,
            password: '',
            email: '',
            token: json.token,
            show: true,
            logInStatus: 'success',
          });

          browserHistory.push('/');
        } else {
          this.setState({
            signInError: json.message,
            logInLoading: false,
            show: true,
            logInStatus: 'danger',
          });
        }

      })

  }


  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  displayAlert() {
    return (
      <Alert bsStyle={this.state.logInStatus} onDismiss={this.handleDismiss} id="alertBox">

        <p>
          {this.state.signInError}
        </p>

      </Alert>

    );
  }
  render() {
    return (
      <div>
          <form className="formSignIn">
          <Avatar className="avatar">
          <button disabled className="avatar"><LockOutlinedIcon /></button>
        </Avatar>
            <FormGroup
              controlId="LogInEmail"
              validationState={this.validateEmail()}
            >

              <FormControl
              className="email"
                type="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChangeEmail}
              />
              <FormControl.Feedback />

            </FormGroup>


            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >

              <FormControl
              
              className="password"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />

            </FormGroup>

            <button
            className="btnsignin"
            block
            bsStyle="success"
            disabled={this.state.logInLoading}
            onClick={this.state.logInLoading ? null : this.logInClicked}
          >
            {this.state.logInLoading ? 'Authenticating...' : 'Log In'}
          </button>

          {this.state.show ? this.displayAlert() : null}
          <p className="nvcompte"><a href="/signup">Créer un compte</a></p>

          </form>

          
      </div>

    );

  }
}

export default SignIn;

