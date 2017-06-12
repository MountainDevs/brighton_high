import React, { Component } from 'react';
import logo from './logo.svg';
import { Styles, Buttons } from 'bitts';

const Landing = React.createClass({
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.app_header}>
          <img src={logo} style={styles.app_logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p style={styles.app_intro}>
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  },

  styles () {
    return {
      app: {
        textAlign: 'center'
      },
      app_logo: {
        animation: 'app-logo-spin infinite 20s linear',
        height: 80
      },
      app_header: {
        backgroundColor: Styles.Colors.BLACK,
        height: 150,
        padding: 20,
        color: Styles.Colors.WHITE
      },
      app_intro: {
      fontSize: Styles.FontSizes.XLARGE,
      }
    }
  }
})
export default Landing;
