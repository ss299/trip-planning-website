import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import NewTrip, { ToggleForm } from "./newTrip.js";
import plane from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg";

import { Card, Button, Jumbotron, Container } from "react-bootstrap"; //import React Component
import { Link } from "react-router-dom";
import picture1 from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg";

export default class HomePageMain extends Component {
  changeModal = () => {
    console.log("here");
    return this.props.updatingState();
  };

  render() {
    return (
      <Card border='dark' style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <image src={picture1} />
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Button onClick={this.changeModal}>Click To Create New Trip</Button>
        </Card.Body>
      </Card>
    );
  }
}
