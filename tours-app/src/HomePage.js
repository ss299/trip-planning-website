import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import NewTrip, { ToggleForm } from "./newTrip.js";
import BestSightseeing, { ToggleForm } from "./Sightseeing.js";
import plane from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg";
import timePhoto from "./img/erik-odiin-jbQvJx2EWnU-unsplash.jpg";

import { Card, Button, Jumbotron, Container } from "react-bootstrap"; //import React Component
import { Link } from "react-router-dom";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { modalHidden: false };
  }

  updatingState = () => {
    console.log(this.state);
    return this.setState({ modalHidden: true });
  };

  render() {
    return (
      <div>
        {/* <div>
          <NavBar state={this.state} updatingState={this.updatingState} />
        </div> */}

        <div>
          <NewTrip state={this.state.modalHidden} />
        </div>
      </div>
    );
  }
}

export class HomePicture extends Component {
  render() {
    return (
      <div id='mainIntro'>
        <Jumbotron fluid>
          <Container>
            <div>
              <h1>Where's Your Next Trip?</h1>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export class NavBar extends Component {
  changeState = (event) => {
    event.preventDefault();
    return this.props.updatingState();
  };

  render() {
    return (
      <div className='navBar'>
        <HomePicture />
        <div className='hamburgerMenu'>
          <img className='resize' src='img/menu-icon.png' alt='Menu icon' />
        </div>

        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/newDayPlan'>New Trip</Link>
            </li>
            <li>
              <Link to='/aboutUs'>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export class tripCard extends Component {
  render() {
    return (
      <div>
        <div class='header2'>
          <h3>Plan A New Trip/ Jump Back In Time</h3>
        </div>

        <div className='cardGroup' id='sizing'>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src={plane} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export class BestSightseeing extends Component {
    render() {
        return (
  
            <div className='cardGroup' id='sizing'>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant='top' src="img/bali.jpg" />
                <Card.Body>
                <Link to='/sightseeing'> 
                    <Button variant='primary'>Best Sightseeing</Button>
                </Link> 
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HomePage;
