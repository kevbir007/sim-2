import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import DashListing from './dashListing';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
    constructor() {
        super();

        this.state={
            rent: '',
            ID: '',
            flag: false,
            listing: []
        }
    }

    changeRent(value){
        this.setState({
            rent: value
        })
    }

    resetRent() {
        this.setState({
            rent: ''
        })
    }
    getDataInfo() {
        return axios ({
            url: '/api/getinfo',
            method: 'get'
        })
        .then((response) => {console.log(response.data) 
            var listing = response.data.map((data) =>{
                return <DashListing key ={data.id} data = {data}/>
            }) 
            this.setState({
                flag: true,
                listing
            })
        })
        .catch((error) => console.log(error))
    }

    componentDidMount() {
        this.getDataInfo()
    }



    render() {
        console.log(this.props.ID)
        return(
            <div>
                <Nav />
                <div className="Main-body-container">
                    <div className="Main-left"></div>
                    <div className="Dashboard">
                        <div className="Dashboard-body">
                            <Link className="Work" to="/Wizard1">
                                <div className="New-property">Add new property</div>
                            </Link>
                            <div className="Filter-container">List properties with "desired rent" greater than: $
                                <input className="Filter-input" 
                                    type="text" 
                                    onChange={e => this.changeRent(e.target.value)} 
                                    value={this.state.rent}>
                                </input>
                                <button className="Filter-button">Filter</button>
                                <button className="Reset-button" onClick={_=> this.resetRent()}>Reset</button>
                            </div>
                            <div className="Home-listings">
                                <div className="Home-listing-header">Home Listings</div>
                            </div>
                            {
                                this.state.flag
                                ?
                                this.state.listing
                                :
                                <h3>No listings found</h3>
                            }
                        </div>
                    <div className="Main-right"></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        ID: state.ID
    };
}

export default connect(mapStateToProps)(Dashboard);