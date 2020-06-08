import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import NewTrip, { ToggleForm } from "./newTrip.js";
import plane from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg";
import "firebase/database";
import "firebase/auth";

import { Card, Button, Jumbotron, Container } from "react-bootstrap"; //import React Component
import { Link } from "react-router-dom";
import picture1 from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg";
import firebase from "firebase/app";

export default class HomePageMain extends Component {
  constructor(props) {
    super(props);
    this.state = { tripCards: [] };
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
      // let res = [];
      // for (let c of card) {
      //   if (c.cards !== undefined) {
      //     res.push(c.cards);
      //   }
      // }
      this.setState({ tripCards: card });
    });
  }

  changeModal = () => {
    console.log("here");
    return this.props.updatingState();
  };

  takeBack = () => {
    let value = [];
    let cardsRef = firebase
      .database()
      .ref(this.props.fbuserkey + "/newTripPlan");
    cardsRef.on("value", (snapshot) => {
      value = snapshot.val();
    });
    //console.log(value);
    return value;
  };

  render() {
    let here = this.takeBack();
    console.log(this.state);
    let save = this.state.tripCards.map((cards) => {
      return (
        <Card className='saveTrip'>
          <Card.Header>{cards.startDate + " TO " + cards.endDate}</Card.Header>
          <Card.Body>
            <Card.Title>{cards.startDestination}</Card.Title>
            <Card.Text>
              You were planning this trip with {cards.noPeople} people and your
              total budget was {cards.budget}. Hope you enjoy this trip!
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
    return (
      <div>
        <div className='newTripCard'>
          <Card border='dark' style={{ width: "18rem" }}>
            <Card.Body>
              <image src={picture1} />
              <Card.Title>START A NEW TRIP</Card.Title>
              <Card.Text>
                Click the button and start adventure of a lifetime
              </Card.Text>

              <Button onClick={this.changeModal}>
                Click To Create New Trip
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className='newTripCard'>
          <Card border='dark' style={{ width: "18rem" }}>
            <Card.Body>
              <image src={picture1} />
              <Card.Title>SIGHTSEEING</Card.Title>
              <Card.Text>
                Explore the wonders of the world through a click of a button
              </Card.Text>

              <Link to='/sightseeing'>
                <Button>Click To Sightsee</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <h1>Previous Trips Planned</h1>
        <p>This will populate once you start planning your adventure</p>
        <div>{save}</div>
      </div>
    );
  }
}
