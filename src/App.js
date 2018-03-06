import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import router from "./router";
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="Main-body-container">
        <div className="Main-left"></div>
        {router}
        <div className="Main-right"></div>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    state
  };
}

export default connect( mapStateToProps )( App );
