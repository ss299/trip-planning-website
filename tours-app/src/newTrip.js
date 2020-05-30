import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import { Card, Button, Jumbotron, Container } from 'react-bootstrap';//import React Component

class NewTrip extends Component {
    render() {
        return(
            <div>
            <div className="introImageForNewTrip" id="mainIntro"/>
            <div className="titles"/>
            <div className="navBar"></div>
            <div className="hamburgerMenu"></div>
                <img className="resize" src="img/menu-icon.png" alt="Menu icon"/>
            <nav>
                <ul>
                    <li><a aria-label="Back to Home Page" href="./index.html">Home</a></li>
                    <li><a onclick="toggleModal()" className="newTrip" aria-label="Plan a new trip" href="#">New Trip</a></li>
                    <li><a aria-label="Look at previous trips" href="#prevTrip">Previous Trips</a></li>
                    <li><a aria-label="Learn about us" href="./About_Us.html">About Us</a></li>
                </ul>
            </nav>
         
    <div className="position-relative fixed-bottom">
        <a className="btn btn-lg btn-block newPlanForm" aria-label="New Beginning" href="javascript:void()">Plan Your Day</a>
    </div>              

    <div className="container" id="overallCard">
    </div>
    
<div className="newDayPlan newDayPlan-hidden">
    <div className="container">
        <div className="closeBarNewDay">
            <span>X</span>
             </div>
                <form className="dayForm" name="firstForm" onsubmit="return false" novalidate>
            
            <div className="form-group">
                        
            <label>Places to visit</label>

            <div>            
                <input className="inputTour" type="text" placeholder="Where We Going"/>
                <button onclick="addTours()" className="btn btn-primary" id="addTour">Submit</button>
            </div>

            <select multiple className="form-control tour" id="exampleFormControlSelect1">
            
            </select>
            </div>

            <div className="form-group">
            <label>Budget for the day</label>
            <input className="inputNum" type="number" placeholder="Budget"/>
        </div>

            <div className="row">
                <h2 className="col-form-label col-sm-2 pt-0">Kid Friendly</h2>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                    <label className="form-check-label" for="gridRadios1">
                      YES
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                    <label className="form-check-label" for="gridRadios2">
                      NO
                    </label>
                  </div>
                  
                </div>
            </div>

            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Transporation Preference</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">Bus</option>
                    <option value="2">Train</option>
                    <option value="3">Rental Car</option>
                    <option value="3">App-Based Ride Share</option>
                    <option value="3">Good Old Walk</option>
                </select>

                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                </div>
            
            <div className="form-group">
            <label for="exampleFormControlTextarea1">Extra Notes</label>
            <textarea className="form-control notes" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
            <button onclick="getDayInfo()" className="btn btn-primary newPlanForm" aria-label="New Beginning">Plan Day</button>
            </div>
        </form>
    </div>
</div>


    
<div className="modal modal-hidden">
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
            <input className="noPeople form-control" type="number" placeholder="" required/>
            <div className="invalid-tooltip"></div>
        </div>

            <button className="newTripButton" onclick="saveNewTrip()">Lets Get Planning</button>
        </form>
    </div>
</div>     
        
    <div className="backgroundTask row">
        <div class = "budgets container col">
            <h3>Budget</h3>
        </div>

        <div className="taskManager container col">
            <input className="newTask" type="text" placeholder="Add a New Task"/>
            <h3>NotCompleted</h3>
            <div className="notComp"> 
            </div>
        </div>
    </div>
    </div>
            )
        }
    }

export default NewTrip;
