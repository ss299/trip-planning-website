import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import { Card, Button, Jumbotron, Container } from 'react-bootstrap';//import React Component

class NewTrip extends Component {
    render() {
        return(
            <div>
            <NewTripForm state = {this.props.state} />
            </div>
        )
    }
}

export class NewTripForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '' , startDestination: '', startDate: '', endDate: '', budget:'' }
    }

    createForm(){
    return(
    <div>
    <div className="modal">
    <div className="contact-form" id="blur">
            <div className="close_bar">
                <span>X</span>
            </div>

            <p className="alert alert-success d-none">Creating Dashboard</p>

            <h2 className="FormTitle">Wheres the new Journey...?</h2>
            
        <form className="needs-validation" novalidate>
            
            <div>
                <label className="formLabel">Name</label>
                <input className="name form-control" type="text" placeholder="Enter Your Name" required/>
                <div className="invalid-tooltip"></div>
            </div>

            <div>
                <label className="formLabel">Start destination</label>
                <input className="initialDestination form-control" type="text" placeholder="Enter Initial Destination" required/>
                <div className="invalid-tooltip"></div>
            </div>

            <div>
                <label className="formLabel">Start of the Adventure</label>
                <input onfocus="(this.type = 'date')" className="startDate form-control" placeholder="Enter Start Date" required/>
                <div className="invalid-tooltip"></div>
            </div>


            <div>
                <label className="formLabel">End of the Adventure</label>
                <input onfocus="(this.type = 'date')" className="endDate form-control" placeholder="Enter Start Date" required/>
                <div className="invalid-tooltip"></div>
            </div>

            <div>
                <label className="formLabel">Budget</label>
                <input className="budget form-control" type="number" placeholder="How much you balling?" required/>
                <div className="invalid-tooltip"></div>
            </div>

            <div>
                <label className="formLabel">Number of People</label>
                <input className="noPeople form-control" type="number" placeholder="" required />
                <div className="invalid-tooltip"></div>
            </div>

                <button className="newTripButton" onclick="saveNewTrip()">Lets Get Planning</button>
        </form>
        </div>
        </div> 
    </div>

    )
}

    render() {
        return(
            <div>
            this.createForm()
            <ToggleForm state = {this.props.state}  toggleForm = {this.toggleForm}/>
            </div>
            )
    }
}

export class ToggleForm extends Component {


    toggleForm(){
        let modalShow = 'modal-hidden'
        if(this.props.state.modalHidden == true) {
            modalShow = '';
        }
        console.log('check')
        return modalShow;
    }
    render(){
        return(
        this.toggleForm
        )
    }
}

export default NewTrip;