import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';
// import router from "./router";
import '../App.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="Main-header">
        <header className="Main-header-container">
          <div className="Main-header-left">
            <div className="Main-logo"></div>
            <div className="Main-header-text">Houser</div>
            <div className="Main-header-text-2">Dashboard</div>
          </div>
          <Link className="Main-Link-color" to="/">
              <div className="Main-logout">Logout</div>
          </Link>
        </header>
      </div>
    );
  }
}

