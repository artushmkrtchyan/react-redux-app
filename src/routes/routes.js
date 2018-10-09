import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { history } from '../helpers';
import { PrivateRoute } from './PrivateRoute'

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
