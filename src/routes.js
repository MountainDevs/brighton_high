import React from 'react';
import {Switch, Route } from 'react-router-dom';

import EventPage from './components/EventPage/EventPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ContactPage from './components/ContactPage/ContactPage'
import AlumniPage from './components/AlumniPage/AlumniPage';

export default (
    <Switch>
        <Route exact path="/" component={EventPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/profiles" component={ProfilePage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/location" component={AlumniPage}/>
    </Switch>
)