import React, { Component } from 'react';

import routes from '../routes.js'

import Navigation from './Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {routes}
      </div>
    );
  }
}

export default App;
