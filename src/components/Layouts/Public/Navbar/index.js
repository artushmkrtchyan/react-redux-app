import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <button className="btn btn-light">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                <button className="btn btn-light">Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
