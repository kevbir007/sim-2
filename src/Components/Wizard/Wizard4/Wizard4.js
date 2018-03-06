import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';
import './Wizard4.css'
import {connect} from 'react-redux';
import {updatePageFour} from '../../../ducks/reducer';
import axios from 'axios';

class Wizard4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loan: this.props.Loan,
            mortgage: this.props.Monthly_Mortgage

        }
    }

    setLoan(value){
        this.setState({
            loan: value
        })
    }

    setMortgage(value){
        this.setState({
            mortgage: value
        })
    }

    // mortgageCalc(mortgage) {
    //     return(mortgage * .25 + mortgage)
    //   }

    render() {
        console.log('hello', this.state.recommended_rent)
        return(
            <div className="Wizard-4">
                <Nav />
                <div className="Wizard-4-main-container">
                    <div className="Wizard-4-left"></div>
                    <div className="Wizard-4-body">
                        <div className="Listing-container-4">
                            <div className="New-listing-text-4">Add new listing</div>
                            <Link to="/dashboard">
                                <button className="Cancel-4">Cancel</button>
                            </Link>
                        </div>
                        <div className="Step-container-4">
                            <span className="Step-4">Step 4</span>
                            <div className="Wiz-4-Blips">
                                <div className="Wiz-4-Blip-1"></div>
                                <div className="Wiz-4-Blip-2"></div>
                                <div className="Wiz-4-Blip-3"></div>
                                <div className="Wiz-4-Blip-4"></div>
                                <div className="Wiz-4-Blip-5"></div>
                            </div>
                        </div>
                        <div className="W-4-text-container">
                            <div className="Loan-text">Loan Amount</div>
                            <textarea className="Loan"                                      type="text" 
                                onChange={e => this.setLoan(e.target.value)} 
                                value={this.state.loan}>
                            </textarea>
                            <div className="Mortgage-text">Monthly Mortgage</div>
                            <textarea className="Mortgage" 
                                type="text" 
                                onChange={e => this.setMortgage(e.target.value)} 
                                value={this.state.mortgage}>
                            </textarea>
                            <div className="Button-container-4">
                                <Link to="/wizard3">
                                    <button className="Wiz-4-prev">Previous Step</button>
                                </Link>
                                <Link to="/wizard5">
                                    <button className="Wiz-4-next" onClick={() => this.props.dispatch(updatePageFour(this.state.loan, this.state.mortgage))}>Next Step</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Wizard-4-right"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        Loan: state.Loan,
        Monthly_Mortgage: state.Monthly_Mortgage,
        Recommended_Rent: state.Recommended_Rent
    }
}

export default connect(mapStateToProps)(Wizard4)