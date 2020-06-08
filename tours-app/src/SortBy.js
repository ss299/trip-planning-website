import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class SortBy extends Component {
    constructor(props) {
        super(props);
        this.sortChange = this.sortChange.bind(this); 

    }
    sortChange(a) {
        this.props.callbackFunction({sort: a})
    } 
    render() {
        return (
            <div className='App container'>
                <DropdownButton className='sortButton' onSelect={this.sortChange} id='dropdown-basic-button' title='Sort By: '>
                    <Dropdown.Item eventKey='rank'>Rank</Dropdown.Item>
                    <Dropdown.Item eventKey='price'>Price (Low to High)</Dropdown.Item>
                </DropdownButton>
            </div>
        )
       
    }
}
export default SortBy;