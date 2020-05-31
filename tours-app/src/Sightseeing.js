import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import SightseeingCards from './components/SightseeingCards';

class Sightseeing extends Component {
  render() {
    let events = this.props.events;
    let renderedEvents = events.map((event) => {
      return <SightseeingCards event={event}/>;
    })
    return (
      <div className="card-deck">
        {renderedEvents}
      </div>
    );
  }
}

export default Sightseeing;



    // constructor() {
    //   super();
    //   // empty states
    //   this.state = {
    //     sortOrder: 'default',
    //     filter: 'default',
    //   }
    //   fetch(Json)
    //     .then(response => response.json())
    //     .then(data => <sightseeingCards event = {data} /> )
    // }