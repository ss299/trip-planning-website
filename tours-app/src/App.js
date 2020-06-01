import React, { Component } from 'react'; //import React Component
import HomePage from './HomePage';
import './indexStyle.css';
import './style.css';
// import Json from './Json.js';
import SightseeingCards from './Sightseeing.js';
// import './indexStyle.css';
// import './style.css';

export class App extends Component {

  constructor(props){
    super(props);
    fetchData();

  }

  fetchData() {
    let variable = fetch(Json)
      .then(response => response.json())
    this.state.data = variable;
  }

  render(){
    return(
    <div>
      <HomePage />
      <Sightseeing events = {this.state.data} /> 
    </div>
    );
  }
}

export default App;
