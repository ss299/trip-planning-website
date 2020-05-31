import React, { Component } from 'react'; //import React Component
import HomePage from './HomePage';
import NewDayPlan from './newDayPlan.js'
import './indexStyle.css';
import './style.css';
// import './indexStyle.css';
// import './style.css';

export class App extends Component {
  render(){
    return(
    <div>
    <HomePage />
    <NewDayPlan />
    </div>
    )
  }
}

export default App;
