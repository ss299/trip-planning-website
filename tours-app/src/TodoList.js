import React, { Component } from "react";
import "./TodoList.css";
import "./newTrip.js";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder='enter task'
            ></input>
            <button type='submit'>add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });

    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }
}

export default TodoList;
