import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <Link to="/">
            <h3>Matt Craig</h3>
          </Link>
        </div>

        <div className="header__right">
          <Link to="/proj">Projects</Link>
          <Link to="/con">Contacts</Link>
        </div>
      </div>
    );
  }
}

export default Header;
