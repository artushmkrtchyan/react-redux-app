import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";

class PrivateLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        {this.props.children}
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
export default PrivateLayout;
