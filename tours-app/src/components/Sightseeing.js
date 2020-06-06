import React, { Component } from 'react';
//import './indexStyle.css';
//import './style.css';
import SightseeingCards from './SightseeingCards';

class Sightseeing extends Component {
  render() {
    let events = this.props.events;
    let renderedEvents = events.map((event) => {
      return <SightseeingCards event={event}/>;
    })
    return (
      <div className="card-deck  justify-content-center">
        {renderedEvents}
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