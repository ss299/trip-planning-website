import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import NewTrip, { ToggleForm } from './newTrip.js'
import plane from "./img/nils-nedel-ONpGBpns3cs-unsplash.jpg" 
import timePhoto from "./img/erik-odiin-jbQvJx2EWnU-unsplash.jpg";

import { Card, Button, Jumbotron, Container } from 'react-bootstrap';//import React Component

export class HomePage extends Component{
    constructor(props) {
        super(props)
        this.state = {modalHidden: false}
    }
    
    render(){
        return(
        <div>
            <div>
                <HomePicture />
            </div>

            <div>
                <NavBar state = {this.state.modalHidden} check = {this.check} />
            </div>

            <div>
                <NewTrip state = {this.props.check} />
            </div>

        </div>    
        )
    }
}


export class HomePicture extends Component{
    render() {
        return(
            <div id="mainIntro">
                <Jumbotron fluid>
                    
                    <Container>
                        <div>
                            <h1>Where's Your Next Trip?</h1>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}


export class NavBar extends Component{


    check = () => {
        this.setState({modalHidden: true})
        console.log("CHECK")
    }

    render(){
        return(
        <div className="navBar">
            <div className="hamburgerMenu">
                <img className="resize" src="img/menu-icon.png" alt="Menu icon"/>
            </div>

            <nav>
                <ul>
                    <li><a aria-label="Back to Home Page" href="./index.html">Home</a></li>
                    <li><a onClick={this.check} className="newTrip" aria-label="Plan a new trip" href="#">New Trip</a></li>
                    <li><a aria-label="Learn about us" href="./About_Us.html">About Us</a></li>
                </ul>
            </nav>
        </div>
        )
    }
}






export class tripCard extends Component{
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