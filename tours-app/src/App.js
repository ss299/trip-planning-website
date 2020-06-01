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
import Json from './Json.js';
import Sightseeing from './components/Sightseeing.js';
// import './indexStyle.css';
// import './style.css';

export class App extends Component {
  
  constructor(props){
    super(props);
    let variable = <div></div>;
    this.state = {
      data: variable
    }
    this.fetchData();

  }

  fetchData() {
   
    fetch(Json)
      .then(response => response.json())
      .then(response => {this.setState({data: <Sightseeing events = {response}/>})})
    
  }

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

          <Route path='/sightseeing' component={Sightseeing}>
            {this.state.data}
          </Route>
         
        </Switch>
        
      </Router>
    );
  }
}

export default App;
