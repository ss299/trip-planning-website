import React, { Component } from "react"; //import React Component
import HomePage, { NavBar } from "./HomePage";
import { NewDayPlan } from "./newDayPlan.js";
import "./indexStyle.css";
import "./style.css";
import {
  Switch,
  NavLink,
  BrowserRouter as Router, Route
} from 'react-router-dom';
import AboutUs from "./about-us";
import { Nav } from "react-bootstrap";
// import './indexStyle.css';
// import './style.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route path='/home' component={HomePage}>
            <HomePage />
          </Route>

          <Route path='/newDayPlan' component={NewDayPlan}>
            <NewDayPlan />
          </Route>

          <Route path='/aboutUs' component={AboutUs}>
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
