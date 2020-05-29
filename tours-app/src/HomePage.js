import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import plane from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg" 
import { Card, Button } from 'react-bootstrap';//import React Component

export class HomePage extends Component{
    render(){
        return(
        <div>
            <div>
                <HomePicture />
            </div>

            <div>
                <NavBar />
            </div>

            <div>
                <NewTrip />
            </div>

        </div>    
        )
    }
}


export class HomePicture extends Component{
    render() {
        return(
            <div className="introImage" id="mainIntro">
                <div className="title">
                    <h1>Where's Your Next Trip?</h1>
                </div>
            </div>
        )
    }
}


export class NavBar extends Component{
    render(){
        return(
        <div className="navBar">
            <div className="hamburgerMenu">
                <img className="resize" src="img/menu-icon.png" alt="Menu icon"/>
            </div>

            <nav>
                <ul>
                    <li><a aria-label="Back to Home Page" href="./index.html">Home</a></li>
                    <li><a onclick="toggleModal()" className="newTrip" aria-label="Plan a new trip" href="#">New Trip</a></li>
                    <li><a aria-label="Look at previous trips" href="#prevTrip">Previous Trips</a></li>
                    <li><a aria-label="Learn about us" href="./About_Us.html">About Us</a></li>
                </ul>
            </nav>
        </div>
        )
    }
}

export class NewTrip extends Component{
    render(){
        return(
    <div>
        <div class="header2">
            <h3>Plan A New Trip/ Jump Back In Time</h3>
        </div>

        <div className = 'cardGroup' id="sizing">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={plane} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
        )
    }
}

 export default HomePage;