import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Details from './pages/Details';
import Profiles from './pages/Profiles';
import Classmates from './pages/Classmates';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
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

class App extends Component {
  render() {
    return (
      <div>
        <section className='pages'>
          <Switch>
              <Route exact path="/" render={
                () => <div>
                        <Header />
                        <div style={{display: 'flex'}}>
                          <SideNav />
                          <Details />
                        </div>
                      </div>
              }/>
              <Route exact path="/profiles" render={
                () => <div>
                        <Header />
                        <div style={{display: 'flex'}}>
                          <SideNav />
                          <Profiles />
                        </div>
                      </div>
              }/>
              <Route exact path="/classmates" render={
                () => <div>
                        <Header />
                        <div style={{display: 'flex'}}>
                          <SideNav />
                          <Classmates />
                        </div>
                      </div>
              }/>
              <Route exact path="/contact" render={
                () => <div>
                        <Header />
                        <div style={{display: 'flex'}}>
                          <SideNav />
                          <Contact />
                        </div>
                      </div>
              }/>
              <Route exact path="/my_profile" render={
                () => <div>
                        <Header />
                        <div style={{display: 'flex'}}>
                          <SideNav />
                          <MyProfile />
                        </div>
                      </div>
              }/>
              <Route exact path="/admin" render={
                () => <div>
                        <Header />
                        <div style={{display: 'flex'}}>
                          <SideNav />
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
