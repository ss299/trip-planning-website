import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container, CardGroup } from "react-bootstrap"; //import React Component
import CreateCards from "./dayCards.js";
import TaskList from "./taskList";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/database";
import "firebase/auth";
import { Link } from "react-router-dom";

export class SaveTrip extends Component {
  takeBack = () => {
    return this.props.takeBack();
  };

  render() {
    return (
      <div className='fixedButton'>
        <Link to='/'>
          <Button variant='success' size='lg' onClick={this.takeBack}>
            Click Here When Done Planning
          </Button>
        </Link>
      </div>
    );
  }
}

export default SaveTrip;
