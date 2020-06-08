import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.dropdownChange = this.dropdownChange.bind(this);
  }
  dropdownChange(a) {
    if (a === null) {
      a = "Spain";
    }
    this.props.callbackFunction({ filter: a });
  }
  render() {
    return (
      <div className='App container'>
        <DropdownButton
          className='dropdownMenu'
          onSelect={this.dropdownChange}
          id='dropdown-basic-button'
          title='Filter By Country: '
        >
          <Dropdown.Item eventKey='all'>All</Dropdown.Item>
          <Dropdown.Item eventKey='USA'>USA</Dropdown.Item>
          <Dropdown.Item eventKey='Puerto Rico'>Puerto Rico</Dropdown.Item>
          <Dropdown.Item eventKey='Mexico'>Mexico</Dropdown.Item>
          <Dropdown.Item eventKey='Greece'>Greece</Dropdown.Item>
          <Dropdown.Item eventkey='Spain'>Spain</Dropdown.Item>
          <Dropdown.Item eventKey='Portugal'>Portugal</Dropdown.Item>
          <Dropdown.Item eventKey='England'>England</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
export default DropdownMenu;
