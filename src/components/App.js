import React, { Component } from 'react';

import routes from '../routes.js'

import Navigation from './Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="main-container">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
