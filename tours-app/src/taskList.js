import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import './newTrip.js';
import List from './List';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }
  
    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }
  
    render() {
      return (
        <div>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Add todos</button>
          </form>
          <h2>NotCompleted</h2>
          <List items={this.state.items} />
        </div>
      );
    }
  }