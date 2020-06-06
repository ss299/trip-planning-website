import React, { Component } from "react"; //import React Component
import { Card, Button, Jumbotron, Container, CardGroup, CardDeck } from "react-bootstrap"; //import React Component
import "../indexStyle.css";
import "../style.css";

class SightseeingCards extends Component {
  render() {
    let event = this.props.event;

    return (
      <CardDeck>
      <Card style={{ width: "20rem", padding: '15px' }} className='text-center align-items-center' >
        <Card.Img variant='top' src={event.image} />
        {/* card rank? */}
        <Card.Body>
          <Card.Title>
            {event.name} , {event.country}
          </Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Button variant='primary' href='#'>
            More details
          </Button>
        </Card.Body>
      </Card>
      </CardDeck>
    );
  }
}

export default SightseeingCards;
