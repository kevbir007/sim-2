import React, { Component } from 'react';
import './Wizard1.css';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';
//connect is imported into every component that needs to connect to redux
import {connect} from 'react-redux';
// update pageOne is an action that will update property and description in our redux's state
import {updatePageOne} from '../../../ducks/reducer';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class Wizard1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            property: this.props.Property,
            description: this.props.Description
        }
    }



    render() {
        return(
            <div className="Wizard-1">
                <Nav />
                <div className="Wizard-main-container">
                    <div className="Wizard-1-left"></div>
                    <div className="Wizard-1-body">
                        <div className="Listing-container">
                            <div className="New-listing-text">Add new listing</div>
                            <Link to="/dashboard">
                                <button className="Cancel">Cancel</button>
                            </Link>
                        </div>
                        <div className="Step-container">
                            <span className="Step">Step 1</span>
                            <div className="Wiz-1-Blips">
                                <div className="Wiz-1-Blip-1"></div>
                                <div className="Wiz-1-Blip-2"></div>
                                <div className="Wiz-1-Blip-3"></div>
                                <div className="Wiz-1-Blip-4"></div>
                                <div className="Wiz-1-Blip-5"></div>
                            </div>
                        </div>
                        <div className="Property-container">
                            <h3 className="Property-name">Property Name</h3>
                            <textarea className="Prop-name-input" 
                                value={this.state.property} 
                                onChange={(e) => this.setState({property: e.target.value})}>
                            </textarea>
                            <h3 className="Prop-description">Property Description</h3>
                            <textarea className="Prop-desc-input" 
                                value={this.state.description} 
                                onChange={(e) => this.setState({description: e.target.value}) }>
                            </textarea>
                            <Link to="wizard2">
                                <button className="Wiz-1-next-button" onClick={() => {
                                    this.props.updatePageOne(this.state.property, this.state.description)}}>Next Step
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="Wizard-1-right"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {Property, Description} = state;
    console.log(Property, Description)
    return {
        Property,
        Description
    };
}

export default connect(mapStateToProps, {updatePageOne})(Wizard1);