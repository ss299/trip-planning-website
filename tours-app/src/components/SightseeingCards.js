import React, { Component } from "react"; //import React Component
import {
  Card,
  Button,
  Jumbotron,
  Container,
  CardGroup,
  CardDeck,
} from "react-bootstrap"; //import React Component
import "../indexStyle.css";
import "../style.css";

class SightseeingCards extends Component {
  render() {
    let event = this.props.event;

    console.log(event);

    return (
      <CardDeck style={{ width: "20rem", margin: "15px" }}>
        <Card className='text-center'>
          <Card.Img variant='top' src={event.image} />
          {/* card rank? */}
          <Card.Body>
            <Card.Title>
              {event.name} , {event.country}
            </Card.Title>
            <Card.Text>{event.description}</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

export default SightseeingCards;
