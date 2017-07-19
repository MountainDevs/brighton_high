import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Details from './pages/Details';
import Profiles from './pages/Profiles';
import Classmates from './pages/Classmates';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import UserProfile from './pages/UserProfile';
import Admin from './pages/Admin';
import Login from './login/Login';
import Register from './register/Register';
import Personal from './register/Personal';
import Additional from './register/Additional';
import ContactInfo from './register/ContactInfo';
import Pay from './register/Pay';
import Done from './register/Done';
import Header from './Header';
import SideNav from './SideNav';
import './App.css';
import { verifyUser, setUserFromLocal, clearData, logout } from '../dataService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
    this.switchLogin = this.switchLogin.bind(this);
  }

  switchLogin(bool) {
    if(!bool){
      clearData();
      logout()
      this.setState({loggedIn: bool})
    }
  }

  componentWillMount() {
    let userVerified = verifyUser();
    if (userVerified && userVerified !== this.state.loggedIn) {
      setUserFromLocal().then(data => {
        this.setState({loggedIn: true});
      })
    }
  }
  componentWillUpdate() {
    let userVerified = verifyUser();
    if (userVerified && userVerified !== this.state.loggedIn) {
      setUserFromLocal().then(data => {
        this.setState({loggedIn: true});
      })
    }
  }

  render() {
    return (
      <div>
        <section className='pages'>
          <Switch>
              <Route exact path="/" render={
                () => <div>
                        <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        <div style={{display: 'flex'}}>
                          <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                          <Details loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        </div>
                      </div>
              }/>
              <Route exact path="/profiles" render={
                () => <div>
                        <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        <div style={{display: 'flex'}}>
                          <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                          <Profiles loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        </div>
                      </div>
              }/>
              <Route exact path="/classmates" render={
                () => <div>
                        <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        <div style={{display: 'flex'}}>
                          <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                          <Classmates loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        </div>
                      </div>
              }/>
              <Route exact path="/contact" render={
                () => <div>
                        <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        <div style={{display: 'flex'}}>
                          <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                          <Contact loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        </div>
                      </div>
              }/>
              <Route exact path="/my_profile" render={
                () => <div>
                        <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        <div style={{display: 'flex'}}>
                          <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                          <MyProfile loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        </div>
                      </div>
              }/>
              <Route exact path="/user/:id" render={
                (props) => { 
                    {/* console.log(props) */}
                    return (<div>
                            <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                            <div style={{display: 'flex'}}>
                              <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                              <UserProfile match={props.match}/>
                            </div>
                    </div>)
              }}/>
              <Route exact path="/admin" render={
                () => <div>
                        <Header loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                        <div style={{display: 'flex'}}>
                          <SideNav loggedIn={this.state.loggedIn} switchLogin={this.switchLogin}/>
                          <Admin />
                        </div>
                      </div>
              }/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register/personal" component={Personal}/>
              <Route exact path="/register/additional" component={Additional}/>
              <Route exact path="/register/contact_info" component={ContactInfo}/>
              <Route exact path="/register/pay" component={Pay}/>
              <Route exact path="/register/done" component={Done}/>
          </Switch>
        </section>
      </div>
    );
  }
}


export default App;
