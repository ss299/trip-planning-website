import React, { Component } from 'react'; //import React Component
import {
    Card, Button
<<<<<<< HEAD
} from 'reactstrap-bootstrap/Card';
import './indexStyle.css';
import './style.css';
=======
} from 'react-bootstrap/';
//import './indexStyle.css';
//import './style.css';
>>>>>>> newTrip

class SightseeingCards extends Component {
    render() {
        
        let event = this.props.event;

        return (
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="event.image" />
                {/* card rank? */}
                <Card.Body>
                    <Card.Title>{event.name} , {event.country}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <Button variant="primary" href="#">More details</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SightseeingCards;