import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  CardGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap"; //import React Component
import CreateCards from "./dayCards.js";
import TaskList from "./taskList";
import firebase from "firebase/app";
import SaveTrip from "./saveNewTripButton";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/database";
import "firebase/auth";

export class SearchFilter extends Component {
  inputHandler = () => {
    console.log("hearing");
    console.log(this.props.stateOfDay);
  };
  render() {
    return (
      <div className='searchBar container'>
        <InputGroup size='lg'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-lg'>Large</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label='Large'
            aria-describedby='inputGroup-sizing-sm'
            onChange={this.inputHandler}
          />
        </InputGroup>
      </div>
    );
  }
}

export default SearchFilter;
