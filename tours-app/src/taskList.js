import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import './newTrip.js';

class TaskList extends Component {

    changeState = () => {
        let modalHidden = "modal modal-hidden"
        if (this.props.state === true) {
            modalHidden = "modal"
        }
        console.log(modalHidden)
        return(modalHidden);
    }

    render() {
        return(
            <div>
        <div className="taskManager container col"></div>
        <input className="newTask" type="text" placeholder="add a new task"/>
        <h3>NotCompleted</h3>
        <div className ="notcomp"></div>
            </div>
        )
    }
}

export default TaskList;
