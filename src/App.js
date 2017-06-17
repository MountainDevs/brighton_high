import React, { Component } from 'react';
import { Tabs } from 'bitts'
import logo from './logo.svg';
import './App.css';
import { Colors, FontSizes } from './constants/Styles.js'

class App extends Component {

  _handleTabClick (tab_name) {
    this.setState({
      active_tab: tab_name
    })
  }

  render() {
    const styles = this.styles()
    return (
      <div style={styles.app}>
        <Tabs
          tabs={[
            {
              value: 'tab1',
              label: 'Tab 1',
              onClick: this._handleTabClick.bind(null, 'tab1'),
              isActive: this.state.active_tab === 'tab1'
            },
            {
              value: 'tab2',
              label: 'Tab 2',
              onClick: this._handleTabClick.bind(null, 'tab2'),
              isActive: this.state.active_tab === 'tab2'
            },
            {
              value: 'tab3',
              label: 'Tab 3',
              onClick: this._handleTabClick.bind(null, 'tab3'),
              isActive: this.state.active_tab === 'tab3'
            }
          ]}
        />
        {this.state.active_tab === 'tab1' ? (
          <div style={styles.app_header}>
            <img src={logo} style={styles.app_logo} alt="logo" />
            <h2>Tab1</h2>
          </div>
        ) : null }
        {this.state.active_tab === 'tab2' ? (
          <div style={styles.app_header}>
            <img src={logo} style={styles.app_logo} alt="logo" />
            <h2>Tab2</h2>
          </div>
        ) : null }
        {this.state.active_tab === 'tab3' ? (
          <div style={styles.app_header}>
            <img src={logo} style={styles.app_logo} alt="logo" />
            <h2>Tab3</h2>
          </div>
        ) : null }
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
        height: 80
      },
      app_header: {
        backgroundColor: '#222',
        height: 150,
        padding: 20,
        color: Colors.RED
      },
      app_intro: {
        fontSize: FontSizes.LARGE
      }
    }
  }
}

export default App;
