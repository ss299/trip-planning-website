import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.dropdownChange = this.dropdownChange.bind(this); 

    }
    dropdownChange(a) {
        if (a === null) {
            a = 'Spain';
        }
        this.props.callbackFunction({filter: a})
    } 
    render() {
        return (
            <div className='App container'>
                <DropdownButton className='dropdownMenu' onSelect={this.dropdownChange} id='dropdown-basic-button' title='Filter By Country: '>
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
        )
       
    }
}
export default DropdownMenu;


//     <DropdownButton id='dropdown-basic-button' title='Filter By Country: &#9660'>
//         <Dropdown.Item href
// <div class="dropdown">
//     <button onclick="myFunction1()" class="dropbtn1">Filter By Country: &#9660</button>
//     <div id="myDropdown1" class="dropdown-content1">
//         <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
//         <a id="All">ALL</a>
//         <a id="USA">USA</a>
//         <a id="Spain">Spain</a>
//         <a id="Puerto_Rico">Puerto Rico</a>
//         <a id="Mexico">Mexico</a>
//         <a id="Greece">Greece</a>
//         <a id="Portugal">Portugal</a>
//         <a id="England">England</a>
//     </div>
// </div>
// 