import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container } from "react-bootstrap";

export default class CreateCards extends Component {
  constructor(props) {
    super(props);
    this.state = { change: [] };
    this.count = 0;
  }

  createCards = () => {
    console.log("check");

    this.setState(() => {
      this.state.change.push(this.count++);
      //console.log(this.state.change);
    });

    let maps = <h1>No Days Planned Yet</h1>;

    if (this.props.state.change != undefined) {
      maps = this.props.state.change.map((card) => {
        let get = <SingleCard id={card} state={this.state.change} />;
        console.log(get.length);
      });
    }
    return maps;
  };

  render() {
    return this.createCards();
  }
}

export class SingleCard extends Component {
  render() {
    return (
      <Card
        className='tourCard'
        id={this.props.id}
        border='dark'
        style={{ width: "18rem" }}
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
