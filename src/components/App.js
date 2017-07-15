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
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/*Header */}
        {/*Nav */}
        <section className='pages'>
          <Switch>
              <Route exact path="/" component={Details}/>
              <Route path="/profiles" component={Profiles}/>
              <Route path="/classmates" component={Classmates}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/my_profile" component={MyProfile}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/register/personal" component={Personal}/>
              <Route path="/register/additional" component={Additional}/>
              <Route path="/register/contact" component={ContactInfo}/>
              <Route path="/register/pay" component={Pay}/>
              <Route path="/register/done" component={Done}/>
          </Switch>
        </section>
      </div>
    );
  }
}


export default App;
