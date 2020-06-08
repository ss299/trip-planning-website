import React, { Component } from "react"; //import React Component
import HomePage, { NavBar } from "./HomePage";
import { NewDayPlan } from "./newDayPlan.js";
import LogIn from "./loginPage";
import "./indexStyle.css";
import "./style.css";
import {
  Switch,
  NavLink,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import AboutUs from "./about-us";
import { Button } from "react-bootstrap";
import Json from "./Json.js";
import Sightseeing from "./components/Sightseeing.js";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import video1 from "./img/videoLogIn.mp4";

// import './indexStyle.css';
// import './style.css';

export class App extends Component {
  constructor(props) {
    super(props);
    let variable = <div></div>;
    this.state = {
      data: variable,
      user: null,
      wrappingUpData: [],
    };
    this.fetchData();
  }

  //Configure FirebaseUI (inside the component, public class field)
  uiConfig = {
    //which sign in values should we support?
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    //for external sign-in methods, use popup instead of redirect
    signInFlow: "popup",
  };

  fetchData() {
    fetch(Json)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: <Sightseeing events={response} /> });
      });
    console.log("checkings");
    console.log(this.state.data);
  }

  componentDidMount() {
    //when I signed in or signed out
    this.authUnSubFunction = firebase
      .auth()
      .onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          //if exists, then we logged in
          console.log("Logged in as", firebaseUser.email);
          this.setState({ user: firebaseUser });
        } else {
          console.log("Logged out");
          this.setState({ user: null });
        }
      });
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  handleSignOut = () => {
    firebase.auth().signOut();
  };

  takeBack = () => {
    console.log("hmmmmm");
  };

  render() {
    let content = null;
    if (!this.state.user) {
      //signed out
      content = (
        <div>
          <div className='bg-text'>
            <p>ARE READY FOR YOUR NEXT ADVENTURE?</p>
            <h1>SCROLL BELOW TO SIGN IN</h1>
          </div>
          <div id='videoDiv'>
            <video className='checks' autoPlay muted loop>
              <source src={video1} type='video/mp4' />
            </video>
          </div>

          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            style='
            margin-top: 2px;'
          />
        </div>
      );
    } else {
      content = (
        <Router>
          <NavBar handleSignOut={this.handleSignOut} />
          {/* <LogIn /> */}

          <Switch>
            <Route exact path='/' component={HomePage}>
              <HomePage
                fbuserkey={this.state.user.email.replace(/[^a-zA-Z0-9]/g, "")}
                wrapUpPass={this.wrapUpPass}
                takeBack={this.takeBack}
              />
            </Route>

            <Route path='/newDayPlan' component={NewDayPlan}>
              <NewDayPlan
                fbuserkey={this.state.user.email.replace(/[^a-zA-Z0-9]/g, "")}
                takeBack={this.takeBack}
              />
            </Route>

            <Route path='/aboutUs' component={AboutUs}>
              <AboutUs />
            </Route>

            <Route path='/sightseeing' component={Sightseeing}>
              {this.state.data}
            </Route>
          </Switch>
        </Router>
      );
    }

    return content;
  }
}

export default App;
