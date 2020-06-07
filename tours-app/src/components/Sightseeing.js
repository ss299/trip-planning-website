import React, { Component } from 'react';
//import './indexStyle.css';
//import './style.css';
import SightseeingCards from './SightseeingCards';
import DropdownMenu from '../dropdown';

class Sightseeing extends Component {
  constructor(props) {
    super(props);
    this.state = {events: this.props.events, filter: 'all'}
  }
  updateState(newState) {
    this.setState(newState);
    console.log(this.state);
  }
  render() {
    let events = this.state.events;

    let renderedEvents = events.map((event) => {
      if(this.state.filter !== 'all') {
        if(this.state.filter === event.country) {
          return <SightseeingCards event={event}/>;
        }
      } else {
        return <SightseeingCards event={event}/>;
      }
    })
    return (
      <div>
        {<DropdownMenu callbackFunction={this.updateState.bind(this)} /> }
        <div className="card-deck  justify-content-center">
          {renderedEvents}
        </div>
      </div>
      
    );
  }
}



export default Sightseeing;

// constructor(props){
//   super(props);
//   fetchData();

// }

// fetchData() {
//   let variable = fetch(Json)
//     .then(response => response.json())
//   this.state.data = variable;
// }

// render(){
//   return(
//   <HomePage />
//   <Sightseeing events = {this.state.data} /> 
//   {data}
//   )
// }
// }