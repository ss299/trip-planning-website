import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container } from "react-bootstrap"; //import React Component

class NewTrip extends Component {
  changeState = () => {
    let modalHidden = "modal modal-hidden";
    if (this.props.state == true) {
      modalHidden = "modal";
    }
    console.log(modalHidden);
    return modalHidden;
  };

  close = () => {
    console.log("hi");
    return "close_bar modal-hidden";
  };

  render() {
    return (
      <div className={this.changeState()}>
        <div className='contact-form' id='blur'>
          <div className={this.close()}>
            <span onClick={this.close}>X</span>
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
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <div>
              <label className='formLabel'>Budget</label>
              <input
                className='budget form-control'
                type='number'
                placeholder='How much you balling?'
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
                required
              />
              <div className='invalid-tooltip'></div>
            </div>

            <button className='newTripButton' onclick='saveNewTrip()'>
              Lets Get Planning
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTrip;
