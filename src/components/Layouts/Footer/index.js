import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small bg-primary">
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <Link to="https://reactjs.org/">React</Link>
        </div>
      </footer>
    );
  }
}
export default Footer;
