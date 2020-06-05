import React, { Component } from "react";
import { Nav, Form, Button } from "react-bootstrap";
import "./indexStyle.css";
import "./style.css";
import firebase from "firebase/app";

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeInput = (name, event) => {
    let value = event.target.value;

    this.handleChange(name, value);
  };

  handleChange = (name, value) => {
    this.setState(() => {
      let pick = this.state;
      pick[name] = value;
    });
    console.log("I changed to:", this.state);
  };

  //this is to sign up for a new user
  handleSignUp = (event) => {
    event.preventDefault();
    this.setState({ errorMessage: null }); //clear old error

    console.log("Creating user", this.state.email);

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);

        let updatePromise = user.updateProfile({
          displayName: this.state.username,
        });
        return updatePromise;
      })
      .then(() => {
        this.setState((prevState) => {
          let updatedUser = {
            ...prevState.user,
            displayName: this.state.username,
          };
          return { user: updatedUser }; //updating the state
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  };

  //this is to sign in and already have an account
  handleSignUp = (event) => {
    event.preventDefault();
    this.setState({ errorMessage: null }); //clear old error

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  };
  render() {
    return (
      <Form className='container'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleChangeInput.bind(this, "email")}
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            onChange={this.handleChangeInput.bind(this, "password")}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={this.handleSignUp}>
          Sign In
        </Button>
        <Button variant='primary' type='submit' onClick={this.handleSignUp}>
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default LogIn;
