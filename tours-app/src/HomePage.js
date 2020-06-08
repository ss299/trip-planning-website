import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import NewTrip, { ToggleForm } from "./newTrip.js";
import plane from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg";
import {
  Switch,
  NavLink,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Card, Button, Jumbotron, Container } from "react-bootstrap"; //import React Component
import { Link } from "react-router-dom";
import hamburgerMenu from "./img/menu-icon.png";
import HomePageMain from "./homePageMain.js";
import "firebase/database";
import "firebase/auth";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { modalHidden: false };
  }

  updatingState = () => {
    console.log("second");
    console.log(this.state);
    if (this.state.modalHidden == false) {
      return this.setState({ modalHidden: true });
    } else {
      return this.setState({ modalHidden: false });
    }
  };

  render() {
    return (
      <div>
        {/* <div>
          <NavBar state={this.state} updatingState={this.updatingState} />
        </div> */}

        <div>
          <NewTrip
            fbuserkey={this.props.fbuserkey}
            state={this.state.modalHidden}
            updatingState={this.updatingState}
          />
        </div>
        <div>
          <HomePageMain
            state={this.state.modalHidden}
            updatingState={this.updatingState}
            takeBack={this.props.takeBack}
            fbuserkey={this.props.fbuserkey}
          />
        </div>
      </div>
    );
  }
}

export class HomePicture extends Component {
  render() {
    return (
      <div className='titleColor'>
        <Jumbotron fluid>
          <Container>
            <div>
              <h1>Where's Your Next Trip?</h1>
            </div>
            <div>
              <Button
                className='signOut'
                variant='secondary'
                size='lg'
                onClick={this.props.handleSignOut}
                active
              >
                Sign Out
              </Button>
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
        <HomePicture handleSignOut={this.props.handleSignOut} />
        <div className='hamburgerMenu'>
          <img className='resize' src={hamburgerMenu} alt='Menu icon' />
        </div>

        <nav>
          <ul>
            <li className='uni'>
              <Link to='/'>Home</Link>
            </li>
            <li className='uni'>
              <Link to='/newDayPlan'>Current Trip Plan</Link>
            </li>
            <li className='uni'>
              <Link to='/sightseeing'>Sightseeing</Link>
            </li>
            <li className='uni'>
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
          <Card.Img variant='top' src='img/bali.jpg' />
          <Card.Body>
            <Link to='/sightseeing'>
              <Button variant='primary'>Best Sightseeing</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export class BestSightSeeing extends Component {
  render() {
    return (
      <div className='cardGroup' id='sizing'>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant='top' src='img/bali.jpg' />
          <Card.Body>
            <Button variant='primary'>Best Sightseeing</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HomePage;
