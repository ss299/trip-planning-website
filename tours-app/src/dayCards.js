import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container } from "react-bootstrap";

export default class CreateCards extends Component {
  constructor(props) {
    super(props);
    this.state = { change: [] };
  }
  create = (makeCard) => {
    makeCard = (
      <div>
        <Card border='dark' style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
    let update = this.state.change;
    this.setState(() => {
      return update.push(makeCard);
    });

    console.log(this.state.change);
    return makeCard;
  };

  render() {
    console.log(this.state.change);
    let update = this.state.change.map((makeCard) => {
      return this.create(makeCard);
    });

    return <div>{update}</div>;
  }
}
