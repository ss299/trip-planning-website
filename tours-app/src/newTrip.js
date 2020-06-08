import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container } from "react-bootstrap"; //import React Component
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

class NewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDestination: "",
      startDate: "",
      endDate: "",
      budget: "",
      noPeople: "",
      allCards: ["stack"],
      favorite: ["Favorite Days"],
    }; //work on this
  }

  changeState = () => {
    let modalHidden = "modal modal-hidden";
    if (this.props.state == true) {
      modalHidden = "modal";
    }
    return modalHidden;
  };

  close = () => {
    console.log("hi");
    return this.props.updatingState();
  };

  handleChange = (name, event) => {
    let value = event.target.value;

    this.setState(() => {
      let pick = this.state;
      pick[name] = value;

      console.log("I changed tooo:", this.state);
    });
  };

  //creating a newtrip
  saveNewTrip = () => {
    let cardRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan");
    cardRef.push(this.state);

    console.log("before");
    console.log(this.state);
  };

  render() {
    return (
      <div className={this.changeState()}>
        <div className='contact-form' id='blur'>
          <div>
            <span className='pointer' onClick={this.close}>
              X
            </span>
          </div>

          <p className='alert alert-success d-none'>Creating Dashboard</p>
          <h2 className='FormTitle'>Wheres the new Journey...?</h2>

          <form className='needs-validation' novalidate>
            <div>
              <label className='formLabel'>Name</label>
              <input
                className='name form-control'
                type='text'
                placeholder='Enter Your Name'
                onChange={this.handleChange.bind(this, "name")}
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <div>
              <label className='formLabel'>Start destination</label>
              <input
                className='initialDestination form-control'
                type='text'
                placeholder='Enter Initial Destination'
                onChange={this.handleChange.bind(this, "startDestination")}
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <div>
              <label className='formLabel'>Start of the Adventure</label>
              <input
                onfocus="(this.type = 'date')"
                className='startDate form-control'
                placeholder='Enter Start Date'
                type='date'
                onChange={this.handleChange.bind(this, "startDate")}
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <div>
              <label className='formLabel'>End of the Adventure</label>
              <input
                onfocus="(this.type = 'date')"
                className='endDate form-control'
                placeholder='Enter Start Date'
                type='date'
                onChange={this.handleChange.bind(this, "endDate")}
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <div>
              <label className='formLabel'>Budget</label>
              <input
                className='budget form-control'
                type='number'
                placeholder='How much cash you spending?'
                onChange={this.handleChange.bind(this, "budget")}
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <div>
              <label className='formLabel'>Number of People</label>
              <input
                className='noPeople form-control'
                type='number'
                placeholder=''
                onChange={this.handleChange.bind(this, "noPeople")}
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <Link to='/newDayPlan'>
              <button onClick={this.saveNewTrip} className='newTripButton'>
                Lets Get Planning
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTrip;
