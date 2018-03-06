import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';
import './Wizard5.css';
import {connect} from 'react-redux';
import {updatePageFive} from '../../../ducks/reducer';
import axios from 'axios';

class Wizard5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            desiredRent: this.props.Desired_Rent,
            recommended_rent: this.props.Monthly_Mortgage * .25 + this.props.Monthly_Mortgage * 1
        }
        this.createProperty = this.createProperty.bind(this);
        this.whenClicked = this.whenClicked.bind(this);
    }

    setDesiredRent(value){
        this.setState({
            desiredRent: value
        })
    }

    createProperty() {

        console.log('create property', this.state.desiredRent, this.props.Url)
        return axios ({
            url: `/api/create`,
            method: "post",
            data: {
                property: this.props.Property,
                description: this.props.Description,
                address: this.props.Address,
                city: this.props.City,
                state: this.props.State,
                zip: this.props.Zip,
                imageUrl: this.props.Url,
                loan: this.props.Loan,
                monthly_mortgage: this.props.Monthly_Mortgage,
                recommended_rent: this.state.recommended_rent,
                desiredRent: this.state.desiredRent
            }
        })
        .then((response) => {console.log('data got', response.data) 
        })
        .catch((error) => console.log(error))
    }

    whenClicked() {
        console.log('i was clicked')
        console.log('yo', this.props.Desired_Rent)
        console.log('state', this.state)
        this.props.updatePageFive(this.state.desiredRent)
        this.createProperty()
    }

    render() {
        console.log(this.state.recommended_rent)
        return(
            <div className="Wizard-5">
                <Nav />
                <div className="Wizard-5-main-container">
                    <div className="Wizard-5-left"></div>
                    <div className="Wizard-5-body">
                        <div className="Listing-container-5">
                            <div className="New-listing-text-5">Add new listing</div>
                            <Link to="/dashboard">
                                <button className="Cancel-5">Cancel</button>
                            </Link>
                        </div>
                        <div className="Step-container-5">
                            <span className="Step-5">Step 5</span>
                            <div className="Wiz-5-Blips">
                                <div className="Wiz-5-Blip-1"></div>
                                <div className="Wiz-5-Blip-2"></div>
                                <div className="Wiz-5-Blip-3"></div>
                                <div className="Wiz-5-Blip-4"></div>
                                <div className="Wiz-5-Blip-5"></div>
                            </div>
                        </div>
                        <div className="Rent-container">
                            <p>Recommended Rent $ {this.state.recommended_rent}</p>
                            <div className="Rent-text">Desired Rent</div>
                            <textarea className="Rent" 
                                type="text" 
                                onChange={e => this.setDesiredRent(e.target.value)} 
                                value={this.state.desiredRent}>
                            </textarea>
                            <div className="Button-container-5">
                                <Link to="/wizard4">
                                    <button className="Wiz-5-prev">Previous Step</button>
                                </Link>
                                <Link to="/dashboard">
                                    <button className="Wiz-5-next" onClick={this.whenClicked}>Complete</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Wizard-5-right"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)    
    return state
        // Desired_Rent: state.Desired_Rent
}

export default connect(mapStateToProps, {updatePageFive})(Wizard5)