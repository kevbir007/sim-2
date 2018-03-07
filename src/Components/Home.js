import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';
import {updateHome} from '../ducks/reducer';
import {bindActionCreators} from 'redux';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.Username,
            password: this.props.Password
        }
            this.handleRegisterClick = this.handleRegisterClick.bind(this)
    }

    handleRegisterClick() {
        console.log("registered", this.state.username, this.state.password)
        return axios ({
            url: `/api/register`,
            method: "post",
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then((response) => {console.log(response.data) 
            console.log('registered')
        })
        .catch((error) => console.log(error))
    }

    setUsername(value){
        this.setState({
            username: value
        })
    }

    setPassword(value){
        this.setState({
            password: value
        })
    }

    onSubmit() {
        const {history} = this.props
        this.props.dispatch(updateHome(this.state.username, this.state.password, history))
                /* 43J I had to use a weird way of doing this.  Doug and I struggled on this for about 2 hours and this is what we came up with */
    }

    render() {
        return (
            <div className="Home">
                <div className="Body">
                    <div>
                        <div className="Logo"></div>
                        <h2 className="Username">Username</h2>
                        <input className="Username-input" 
                            type="text"
                            value={this.state.username} 
                            onChange={e => this.setUsername( e.target.value ) }>
                        </input>
                        <h2 className="Password">Password</h2>
                        <input className="Password-input" 
                            type="text"
                            value={this.state.password} 
                            onChange={(e) => this.setPassword( e.target.value ) }>
                        </input>
                        <div>
                            <div className="Login" onClick={() => this.onSubmit() }>Login</div>
                            <Link to="/dashboard">
                                <div className="Register" onClick={() => this.handleRegisterClick() }>Register</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/* 43H */
function mapStateToProps(state)/*43G*/ {
    return {
        Username: state.Username,
        Password: state.Password
    }
}


export default connect(mapStateToProps)(Home);
// this.props.dispatch(updateHome( this.state.username, this.state.password))