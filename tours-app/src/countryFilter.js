import React, { Component } from 'react'; //import React Component
import './indexStyle.css';
import './style.css';

export class countryFilter extends Component {
    render() {
        return (
        <div class="dropdown">
            <button onclick="myFunction1()" class="dropbtn1">Filter By Country: &#9660</button>
            <div id="myDropdown1" class="dropdown-content1">
                <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
                    <a id="All">ALL</a>
                    <a id="USA">USA</a>
                    <a id="Spain">Spain</a>
                    <a id="Puerto_Rico">Puerto Rico</a>
                    <a id="Mexico">Mexico</a>
                    <a id="Greece">Greece</a>
                    <a id="Portugal">Portugal</a>
                    <a id="England">England</a>
                </input>
            </div>
        </div>
        );
    }
}

export default countryFilter;