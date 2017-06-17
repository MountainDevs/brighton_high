import React, { Component } from 'react';
import { Tabs } from 'bitts'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const styles = this.styles()
    return (
      <div style={styles.app}>
        <Tabs
          tabs={[
            {
              value: 'tab1',
              label: 'Tab 1'
            },
            {
              value: 'tab2',
              label: 'Tab 2'
            },
            {
              value: 'tab3',
              label: 'Tab 3'
            }
          ]}
        />
        <div style={styles.app_header}>
          <img src={logo} style={styles.app_logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }

  styles() {
    return {
      app: {
        textAlign: 'center'
      },
      app_logo: {
        animation: 'App-logo-spin infinite 20s linear',
        height: 80
      },
      app_header: {
        backgroundColor: '#222',
        height: 150,
        padding: 20,
        color: 'white'
      },
      app_intro: {
        fontSize: 'large'
      }
    }
  }
}

export default App;
