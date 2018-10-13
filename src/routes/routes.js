import React from 'react';
import {Router, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { history } from '../helpers';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

class Routes extends React.Component {
    render() {
        return <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <PublicRoute path="/login" component={LoginPage} />
              <PublicRoute path="/register" component={RegisterPage} />
            </Switch>
          </Router>;
    }
}

export default Routes;
