import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import './sightseeingCards.js'

class Sightseeing extends Component {

    constructor() {
      super();
      // empty states
      this.state = {
        sortOrder: 'default',
        filter: 'default',
      }
      fetch(Json)
        .then(response => response.json())
        .then(data => <sightseeingCards event = {data} /> )
    }
}