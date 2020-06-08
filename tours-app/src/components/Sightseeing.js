import React, { Component } from 'react';
//import './indexStyle.css';
//import './style.css';
import SightseeingCards from './SightseeingCards';
import DropdownMenu from '../dropdown';
import SortBy from '../SortBy';

class Sightseeing extends Component {
  constructor(props) {
    super(props);
    this.state = {events: this.props.events, filter: 'all', sort: ''}
  }
  updateState(newState) {
    this.setState(newState);
    console.log(this.state);
  }
  render() {
    let events = this.state.events;
    let sortedEvents = '';
    let renderedEvents = '';
    if (this.state.sort === 'rank') {
      let sortedByRank = events.sort((a,b) => a.rank - b.rank);
      sortedEvents = sortedByRank.map((event) => {
        return <SightseeingCards event={event}/>;
      });
    } else if (this.state.sort === 'price') {
      let sortedByPrice = events.sort((a,b) => a.avgPrice - b.avgPrice);
      console.log(sortedByPrice);
      sortedEvents = sortedByPrice.map((event) => {
        console.log(event);
        return <SightseeingCards event={event}/>;
      });
    }
      console.log(this.state);
      console.log(sortedEvents);
    
    if(sortedEvents !== '') {
      renderedEvents = sortedEvents.map((event) => {
        if(this.state.filter !== 'all') {
          if(this.state.filter === event.country) {
            return <SightseeingCards event={event}/>;
          }
        } else {
          return <SightseeingCards event={event}/>;
        }
      })
    } else {
      renderedEvents = events.map((event) => {
        if(this.state.filter !== 'all') {
          if(this.state.filter === event.country) {
            return <SightseeingCards event={event}/>;
          }
        } else {
          return <SightseeingCards event={event}/>;
        }
      })
    }
    
    return (
      <div>
        {<SortBy callbackFunction={this.updateState.bind(this)} /> }
        {<DropdownMenu callbackFunction={this.updateState.bind(this)} /> }
        <div className="card-deck  justify-content-center">
          {renderedEvents}
        </div>
      </div>
      
    );
  }
}



export default Sightseeing;

