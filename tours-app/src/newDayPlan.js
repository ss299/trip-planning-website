import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, CardGroup, Carousel } from "react-bootstrap"; //import React Component
import CreateCards from "./dayCards.js";
import TodoList from "./TodoList";
import firebase from "firebase/app";
import SaveTrip from "./saveNewTripButton";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/database";
import "firebase/auth";
import SearchFilter from "./searchFilter";
import slider from "./img/2ppt.jpg";

export class NewDayPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visit: "",
      budget: "",
      friendly: "",
      transporation: "",
      notes: "",
      message: "",
      allLocation: [],
      oldCards: [],
      ids: [],
      count: 0,
      trackCards: [],
      favoriteCard: [],
    };
    this.counter = -1;
  }

  componentDidMount() {
    let messageRef = firebase.database().ref("message"); //here's how we get access to the message key
    messageRef.on("value", (snapshot) => {
      let value = snapshot.val();

      this.setState({ message: value });
    });

    let cardsRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan");
    cardsRef.on("value", (snapshot) => {
      let value = snapshot.val();

      let card = [];
      if (value) {
        let cardIds = Object.keys(value);

        card = cardIds.map((cardId) => {
          return { id: cardId, ...value[cardId] };
        });
      }

      this.setState({ oldCards: card });
    });
  }

  handleChange = (name, value) => {
    this.setState(() => {
      let pick = this.state;
      pick[name] = value;
    });
  };

  finishedState = () => {
    let getNum = this.state.oldCards.length - 1;
    let latestID = this.state.oldCards[getNum];

    let value = [];
    let cardsRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan/" + latestID.id + "/allCards");
    cardsRef.on("value", (snapshot) => {
      value = snapshot.val();

      let saveCount = 0;

      if (value) {
        if (value[0] === "stack") {
          value[0] = {
            visit: this.state.visit,
            budget: this.state.budget,
            friendly: this.state.friendly,
            transporation: this.state.transporation,
            notes: this.state.notes,
            message: this.state.message,
            allLocation: this.state.allLocation,
            count: saveCount,
          };
        } else {
          let makeArr = value;
          if (value)
            if (!Array.isArray(value)) {
              value = [makeArr];
            }
          console.log(value);

          saveCount = value[value.length - 1].count;
          saveCount = saveCount + 1;
          value.push({
            visit: this.state.visit,
            budget: this.state.budget,
            friendly: this.state.friendly,
            transporation: this.state.transporation,
            notes: this.state.notes,
            message: this.state.message,
            allLocation: this.state.allLocation,
            count: saveCount,
          });
        }
      }
      this.setState({ allLocation: [] });
    });

    let cardRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan/" + latestID.id + "/allCards");
    cardRef.update(value);

    //step 1: we want to save the value of cards as a variable
    //step 2: we want to push new data to the variable
    //step 3: save the new variable as cards
  };

  fillAllLocation = (location) => {
    this.setState(() => {
      return this.state.allLocation.push(location);
    });
  };

  closeCard = (index) => {
    let getNum = this.state.oldCards.length - 1;
    let latestID = this.state.oldCards[getNum];
    let value = [];
    let removeVal;
    let newUpdate = [];

    let cardsRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan/" + latestID.id + "/allCards");
    cardsRef.on("value", (snapshot) => {
      value = snapshot.val();
    });

    let cardRefs = firebase
      .database()
      .ref(
        this.props.fbuserkey +
          "/newTripPlan/" +
          latestID.id +
          "/allCards/" +
          index
      );
    cardRefs.remove();

    if (!value) {
      value = ["stack"];
      cardsRef.update(value);
    }
  };

  favorite = (number) => {
    let getNum = this.state.oldCards.length - 1;
    let latestID = this.state.oldCards[getNum];

    let value = [];
    let cardsRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan/" + latestID.id + "/favorite");
    cardsRef.on("value", (snapshot) => {
      value = snapshot.val();
    });

    this.state.oldCards[this.state.oldCards.length - 1].allCards.map((fav) => {
      if (fav.count == number) {
        value.push(fav);
      }
    });

    let cardRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan/" + latestID.id + "/favorite");
    cardRef.update(value);
  };

  takeBack = () => {
    this.props.takeBack();
  };

  render() {
    let accessEarly = this.state.oldCards[this.state.oldCards.length - 1];

    let favs = [];
    let cardText;

    let newTask = this.state.oldCards.map((cards) => {
      if (accessEarly === cards && cards.allCards !== undefined) {
        let renderFav = cards.favorite.map((fav) => {
          if (fav !== "Favorite Days") {
            if (fav.allLocation != undefined) {
              cardText = fav.allLocation.map((text) => {
                return <p>{text}</p>;
              });
            }
            let makeSlide = (
              <Carousel.Item>
                <img
                  className='d-block h-100 w-90'
                  src={slider}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>{accessEarly.startDestination}</h3>
                  <h3>{fav.budget}</h3>
                  <h3>{cardText}</h3>
                  <h3>{fav.notes}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
            favs.push(makeSlide);
          }
        });
      }
    });

    let lastSlide = favs.map((last) => {
      return last;
    });
    return (
      <div>
        <SaveTrip takeBack={this.takeBack} stateOfDay={this.state} />
        <NewDayPlanForm
          stateOfDay={this.state}
          handleChange={this.handleChange}
          finishedState={this.finishedState}
          fillAllLocation={this.fillAllLocation}
          closeCard={this.closeCard}
          favorite={this.favorite}
        />

        <h1>Days To Look Forward To</h1>
        <p>Favorite card days will populate over here</p>
        <div className='back'>
          <Carousel>{lastSlide}</Carousel>
        </div>
        <TodoList />
      </div>
    );
  }
}

export class NewDayPlanForm extends Component {
  constructor(props) {
    super(props);
    //in the options tags keeps track of everywhere we have to go for the day
    this.state = { location: [], showCard: [], finallocation: [] };
    this.counter = 0;
  }

  respondDayChange = (name, event) => {
    let value = event.target.value;

    this.props.handleChange(name, value);
  };

  handleClick = (event) => {
    event.preventDefault();

    this.setState(() => {
      let value = this.props.stateOfDay.visit;
      this.props.fillAllLocation(value);
      return this.state.location.push(value);
    });
  };

  //the final submit button is hit and cards render
  getDayInfo = (event) => {
    event.preventDefault();

    this.setState(() => {
      return this.state.showCard.push(this.counter);
    });

    this.props.finishedState();
    this.setFinalLocation();
    this.resetArray();
  };

  resetArray() {
    return this.setState({ location: [] });
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

  closeCard = (counter) => {
    return this.props.closeCard(counter);
  };

  favorite = (number) => {
    return this.props.favorite(number);
  };

  render() {
    let cardText = "";

    let accessEarly = this.props.stateOfDay.oldCards[
      this.props.stateOfDay.oldCards.length - 1
    ];

    let newTrip = [];
    this.counter = 0;
    let newTask = this.props.stateOfDay.oldCards.map((cards) => {
      if (
        accessEarly === cards &&
        cards.allCards !== undefined &&
        cards.allCards[0] !== "stack"
      ) {
        let makeArr = cards.allCards;
        if (!Array.isArray(makeArr)) {
          makeArr = [cards.allCards];
        }
        let creatingCards = makeArr.map((card) => {
          if (card.allLocation != undefined) {
            cardText = card.allLocation.map((text) => {
              return <p>{text}</p>;
            });
          } else {
            cardText = "No Places Chosen to Visit";
          }
          this.counter++;
          let newTour = (
            <div className='d-flex flex-wrap'>
              <Card
                id={card.count}
                className='tourCard'
                border='dark'
                style={{ width: "18rem" }}
              >
                <Card.Header>
                  <span
                    className='pointer'
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      this.closeCard(card.count);
                    }}
                  >
                    X
                  </span>
                  {"Day " + this.counter}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {"Budget for the Day $" + card.budget}
                  </Card.Title>

                  <Card.Title>{"Kid-Friendly: " + card.friendly}</Card.Title>

                  <Card.Title>
                    {"Transportation: " + card.transporation}
                  </Card.Title>

                  <Card.Title>{"Extra Notes: "}</Card.Title>
                  <Card.Text>{card.notes}</Card.Text>

                  <Card.Title>{"Places to Visit: "}</Card.Title>

                  <Card.Text>{cardText}</Card.Text>
                </Card.Body>
                <div
                  className='hoverFav'
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    this.favorite(card.count);
                  }}
                >
                  Favorite
                </div>
              </Card>
            </div>
          );
          newTrip.push(newTour);
        });
      } else {
        console.log("some error");
      }
    });

    let updatedTasks = this.state.location.map((location) => {
      let here = <option>{location}</option>;
      return here;
    });

    let finalTrip = newTrip.map((trac) => {
      return <div>{trac}</div>;
    });

    return (
      <div>
        <div className='d-flex flex-wrap'>
          <CardGroup>{finalTrip}</CardGroup>
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

              <button
                onClick={this.getDayInfo}
                className='btn btn-primary newPlanForm'
                aria-label='New Beginning'
              >
                Plan Day
              </button>
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
