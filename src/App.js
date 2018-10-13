import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

import Routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

export default App;
