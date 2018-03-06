import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';
import './Wizard2.css';
import {connect} from 'react-redux';
import {updatePageTwo} from '../../../ducks/reducer';
import axios from 'axios';

class Wizard2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: this.props.Address,
            city: this.props.City,
            stateText: this.props.State,
            zip: this.props.Zip
        }
    }

    setAddress(value){
        this.setState({
            address: value
        })
    }

    setCity(value){
        console.log('value', value)
        this.setState({
            city: value
        })
    }

    setStateText(value){
        this.setState({
            stateText: value
        })
    }

    setZip(value){
        this.setState({
            zip: value
        })
    }

    render() {
        return(
            <div className="Wizard-2">
                <Nav />
                <div className="Wizard-2-main-container">
                    <div className="Wizard-2-left"></div>
                    <div className="Wizard-2-body">
                        <div className="Listing-container-2">
                            <div className="New-listing-text-2">Add new listing</div>
                            <Link to="/dashboard">
                                <button className="Cancel-2">Cancel</button>
                            </Link>
                        </div>
                        <div className="Step-container-2">
                            <span className="Step-2">Step 2</span>
                            <div className="Wiz-2-Blips">
                                <div className="Wiz-2-Blip-1"></div>
                                <div className="Wiz-2-Blip-2"></div>
                                <div className="Wiz-2-Blip-3"></div>
                                <div className="Wiz-2-Blip-4"></div>
                                <div className="Wiz-2-Blip-5"></div>
                            </div>
                        </div>
                        <div className="Address-container">
                            <div className="Address-text">Address</div>
                            <textarea className="Address" 
                                type="text" 
                                onChange={e => this.setAddress(e.target.value)} 
                                value={this.state.address}>
                            </textarea>
                            <div className="City-State-container">
                                <div className="City-text">
                                    <p>City</p>
                                    <textarea className="City" 
                                        type="text" 
                                        onChange={e => this.setCity(e.target.value)} 
                                        value={this.state.city}>
                                    </textarea>
                                </div>
                                <div className="States-text">
                                    <p>State</p>
                                    <textarea className="States" 
                                        type="text" 
                                        onChange={e=> this.setStateText(e.target.value)}
                                        value={this.state.stateText}>
                                    </textarea>
                                </div>
                            </div>
                                <div className="Zip-text">Zip</div>
                                <textarea className="Zip" 
                                    type="text" 
                                    onChange={e => this.setZip(e.target.value)} 
                                    value={this.state.zip}>
                                </textarea>
                                <div className="Button-container-2">
                                    <Link to="/wizard1">
                                        <button className="Wiz-2-prev">Previous Step</button>
                                    </Link>
                                    <Link to="/wizard3">
                                        <button className="Wiz-2-next" onClick={() => this.props.dispatch(updatePageTwo(this.state.address, this.state.city, this.state.stateText, this.state.zip))}>Next Step
                                        </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Wizard-2-right"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        Address: state.Address,
        City: state.City,
        State: state.State,
        Zip: state.Zip
    }
}

export default connect(mapStateToProps)(Wizard2)