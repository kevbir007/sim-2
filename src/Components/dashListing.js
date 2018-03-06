import React, {Component} from 'react';
import axios from 'axios';

export default class DashListing extends Component{
    constructor() {
        super();

        this.state = {
            
        }
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    deleteProperty() {
        return axios ({
            url: `/api/delete/${this.props.data.id}`,
            method: 'delete',

        })
        .then((response) => {console.log(response.data) 
            console.log('deleted')
        })
        .catch((error) => console.log(error))
    }

    render() {
        console.log(this.props.data)
        return(
            <div className="Home-listing-data">
                <div className='Picture-side'>
                    <div className='Picture-container' style = {{backgroundImage: `url('${this.props.data.url}')`}}></div>
                </div>
                <div className='Data-side'>
                    <p>Loan: ${this.props.data.loan}</p>
                    <p>Monthly Mortgage: ${this.props.data.monthly_mortgage}</p>
                    <p>Recommended Rent: ${this.props.data.recommended_rent}</p>
                    <p>Desired Rent: {this.props.data.desiredRent}</p>
                    <p>Address: {this.props.data.address}</p>
                    <p>City: {this.props.data.city}</p>
                    <p>State: {this.props.data.state}</p>
                    <p>Zip: {this.props.data.zip}</p>
                </div>
                <div className="X-out" onClick={this.deleteProperty}></div>
            </div>
        )
    }
}