import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';
import './Wizard3.css'
import {connect} from 'react-redux';
import {updatePageThree} from '../../../ducks/reducer';
import axios from 'axios';

class Wizard3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: this.props.Url
        }
    }

    setUrl(value){
        this.setState({
            url: value
        })
    }

    render() {
        return(
            <div className="Wizard-3">
                <Nav />
                <div className="Wizard-3-main-container">
                    <div className="Wizard-3-left"></div>
                    <div className="Wizard-3-body">
                        <div className="Listing-container-3">
                            <div className="New-listing-text-3">Add new listing</div>
                            <Link to="/dashboard">
                                <button className="Cancel-3">Cancel</button>
                            </Link>
                        </div>
                        <div className="Step-container-3">
                            <span className="Step-3">Step 3</span>
                            <div className="Wiz-3-Blips">
                                <div className="Wiz-3-Blip-1"></div>
                                <div className="Wiz-3-Blip-2"></div>
                                <div className="Wiz-3-Blip-3"></div>
                                <div className="Wiz-3-Blip-4"></div>
                                <div className="Wiz-3-Blip-5"></div>
                            </div>
                        </div>
                        <div className="Image-container">
                            {/* <div className="Picture">Picture goes here */}
                            {
                                this.state.url === ''
                                ?
                                <div className="Picture">Picture goes here</div>
                                :
                                <div className="Picture" style = {{backgroundImage: `url('${this.state.url}')`}}></div>
                            }
                            
                            <div className="Url-text">Image URL</div>
                            <textarea className="Url-input" 
                                type="text" 
                                onChange={e => this.setUrl(e.target.value)} 
                                value={this.state.url}>
                            </textarea>
                            <div className="Button-container-3">
                                <Link to="/wizard2">
                                    <button className="Wiz-3-prev">Previous Step</button>
                                </Link>
                                <Link to="/wizard4">
                                    <button className="Wiz-3-next" onClick={() => this.props.dispatch(updatePageThree(this.state.url))}>Next Step</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Wizard-3-right"></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        Url: state.Url
    }
}

export default connect(mapStateToProps)(Wizard3)