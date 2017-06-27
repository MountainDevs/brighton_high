import React from 'react';
import {Switch, Route } from 'react-router-dom';

import EventPage from './components/EventPage/EventPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

export default (
    <Switch>
        <Route exact path="/" component={EventPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/profiles" component={ProfilePage}/>
    </Switch>
)