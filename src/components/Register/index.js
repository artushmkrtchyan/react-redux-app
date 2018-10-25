import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions, alertActions, validationActions } from "../../actions";
import "./style.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      submitted: false
    };
  }

  handleChange = e => {
    const { dispatch, alert, validation } = this.props;
    if (alert && alert.message) {
      dispatch(alertActions.clear());
    }
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
    if (validation && validation[name]) {
      dispatch(validationActions.clear(name));
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.name && user.email && user.password) {
      dispatch(userActions.register(user));
    }
  };

  render() {
    const { registering, alert, validation } = this.props;

    const { user, submitted } = this.state;
    return (
      <div className="registerForm">
        <h2 className="h2Title">Register</h2>
        {alert &&
          alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !user.name ? " has-error" : "")
            }
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={this.handleChange}
            />
            {submitted &&
              !user.name && <div className="help-block">Name is required</div>}
          </div>

          <div
            className={
              "form-group" + (submitted && validation.email ? " has-error" : "")
            }
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={this.handleChange}
            />
            {submitted &&
              validation.email && (
                <div className="help-block">{validation.email}</div>
              )}
          </div>

          <div
            className={
              "form-group" +
              (submitted && validation.password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
            {submitted &&
              validation.password && (
                <div className="help-block">{validation.password}</div>
              )}
          </div>
          <div
            className={
              "form-group" +
              (submitted && validation.password ? " has-error" : "")
            }
          >
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              value={user.password_confirmation}
              onChange={this.handleChange}
            />
            {submitted &&
              validation.password && (
                <div className="help-block">{validation.password}</div>
              )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {registering && (
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  const { alert, validation } = state;

  return {
    registering,
    alert,
    validation
  };
}

export default connect(mapStateToProps)(Register);
