import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.scss'
import {userActions} from "../../../../actions";
import {connect} from "react-redux";

class Navbar extends Component {

    handleClick = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/"className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn btn-light" onClick={this.handleClick}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Navbar);