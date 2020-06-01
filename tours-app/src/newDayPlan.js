import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container, CardGroup } from "react-bootstrap"; //import React Component
import CreateCards from "./dayCards.js";

export class NewDayPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visit: "",
      budget: "",
      friendly: "",
      transporation: "",
      notes: "",
      final: [],
    };
  }

  handleChange = (name, value) => {
    this.setState(() => {
      let pick = this.state;
      pick[name] = value;

      console.log("I changed to:", this.state);
    });
  };

  finishedState = () => {
    this.setState((prevState) => ({
      final: [...prevState.final, { name: this.state }],
    }));
    console.log(this.state.final);
  };

  render() {
    return (
      <NewDayPlanForm
        stateOfDay={this.state}
        handleChange={this.handleChange}
        finishedState={this.finishedState}
      />
    );
  }
}

export class NewDayPlanForm extends Component {
  constructor(props) {
    super(props);
    this.state = { location: [], showCard: [], finallocation: [] };
    this.counter = -1;
  }

  respondDayChange = (name, event) => {
    let value = event.target.value;

    this.props.handleChange(name, value);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState(() => {
      let value = this.props.stateOfDay.visit;
      console.log("value: " + value);
      return this.state.location.push(value);
    });
    console.log("tempArray: " + this.state.location);
  };

  //the final submit button is hit and cards render
  getDayInfo = (event) => {
    event.preventDefault();
    this.counter++;
    this.setState(() => {
      return this.state.showCard.push(this.counter);
    });

    this.props.finishedState();
    this.setFinalLocation();
    this.resetArray();
    //console.log("save test" + this.props.stateOfDay.final.budget);
  };

  resetArray() {
    return this.setState({ location: [] });

    console.log(this.state.location);
  }

  setFinalLocation = () => {
    let final = this.setState((prevState) => ({
      finallocation: [
        ...prevState.finallocation,
        { finalLoc: this.state.location },
      ],
    }));
    return final;
  };

  render() {
    let newTask = this.state.showCard.map((card) => {
      let newTour = (
        <div className='d-flex flex-wrap'>
          <Card
            className='tourCard'
            id={card}
            border='dark'
            style={{ width: "18rem" }}
          >
            <Card.Header>{"Day" + (card + 1)}</Card.Header>
            <Card.Body>
              <Card.Title>
                {"Budget for the Day $" +
                  this.props.stateOfDay.final[card].name.budget}
              </Card.Title>

              <Card.Title>
                {"Kid-Friendly: " +
                  this.props.stateOfDay.final[card].name.friendly}
              </Card.Title>

              <Card.Title>
                {"Transportation: " +
                  this.props.stateOfDay.final[card].name.transporation}
              </Card.Title>

              <Card.Title>{"Extra Notes: "}</Card.Title>
              <Card.Text>
                {this.props.stateOfDay.final[card].name.notes}
              </Card.Text>

              <Card.Title>{"Places to Visit: "}</Card.Title>
              <Card.Text>
                {this.state.finallocation[card].finalLoc.map((text) => {
                  return <p>{text}</p>;
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
      return newTour;
    });

    let updatedTasks = this.state.location.map((location) => {
      let here = <option>{location}</option>;
      return here;
    });

    return (
      <div>
        <div className='d-flex flex-wrap'>
          <CardGroup>{newTask}</CardGroup>
        </div>

        <div className='newDayPlan'>
          <div>
            <form
              className='tourForm'
              name='firstForm'
              onsubmit='return false'
              novalidate
            >
              <div className='form-group'>
                <label>Places to visit</label>
                <div>
                  <input
                    onChange={this.respondDayChange.bind(this, "visit")}
                    className='inputTour'
                    type='text'
                    placeholder='Where We Going'
                  />
                  <button
                    onClick={this.handleClick}
                    className='btn btn-primary'
                    id='addTour'
                  >
                    Submit
                  </button>
                </div>
                <select
                  multiple
                  className='form-control tour'
                  id='exampleFormControlSelect1'
                >
                  {updatedTasks}
                </select>
              </div>
              <div className='form-group'>
                <label>Budget for the day</label>
                <input
                  onChange={this.respondDayChange.bind(this, "budget")}
                  className='inputNum'
                  type='number'
                  placeholder='Budget'
                />
              </div>
              <div className='row'>
                <h2 className='col-form-label col-sm-2 pt-0'>Kid Friendly</h2>
                <div className='col-sm-10'>
                  <div className='form-check'>
                    <input
                      onChange={this.respondDayChange.bind(this, "friendly")}
                      className='form-check-input'
                      type='radio'
                      name='gridRadios'
                      id='gridRadios1'
                      value='YES'
                      x
                    />
                    <label className='form-check-label' for='gridRadios1'>
                      YES
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      onChange={this.respondDayChange.bind(this, "friendly")}
                      className='form-check-input'
                      type='radio'
                      name='gridRadios'
                      id='gridRadios2'
                      value='NO'
                    />
                    <label className='form-check-label' for='gridRadios2'>
                      NO
                    </label>
                  </div>
                </div>
              </div>
              <label className='my-1 mr-2' for='inlineFormCustomSelectPref'>
                Transporation Preference
              </label>
              <select
                onChange={this.respondDayChange.bind(this, "transporation")}
                className='custom-select my-1 mr-sm-2'
                id='inlineFormCustomSelectPref'
              >
                <option selected>Choose...</option>
                <option value='Bus'>Bus</option>
                <option value='Train'>Train</option>
                <option value='Rental Car'>Rental Car</option>
                <option value='App-Based Ride Share'>
                  App-Based Ride Share
                </option>
                <option value='Good Old Walk'>Good Old Walk</option>
              </select>
              <div className='custom-control custom-checkbox my-1 mr-sm-2'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customControlInline'
                />
              </div>
              <div className='form-group'>
                <label for='exampleFormControlTextarea1'>Extra Notes</label>
                <textarea
                  onChange={this.respondDayChange.bind(this, "notes")}
                  className='form-control notes'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <div>
                <button
                  onClick={this.getDayInfo}
                  className='btn btn-primary newPlanForm'
                  aria-label='New Beginning'
                >
                  Plan Day
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export class newPlanDayButton extends Component {
  render() {
    return (
      <div className='position-relative fixed-bottom'>
        <a
          className='btn btn-lg btn-block newPlanForm'
          aria-label='New Beginning'
          href='javascript:void()'
        >
          Plan Your Day
        </a>
      </div>
    );
  }
}

export class newLocation extends Component {
  render() {
    let updatedTasks = this.props.state.location.map((location) => {
      let here = <option>{location}</option>;
      return here;
    });

    return updatedTasks;
  }
}
export default NewDayPlan;
