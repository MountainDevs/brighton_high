"use strict";
const app = require('./server');
const jwt = require('express-jwt');
const userService = require('./services/profile/user-profile.service');
const config = require('./config.json');


app.use('/api/user', jwt({secret: config.secret}));

app.get('/api/user', userService.getUser);
app.post('/api/user', userService.postUser);
app.put('/api/user', userService.updateUser);
app.post('/api/stripe_record', userService.postStripeRecord);
app.get('/api/user', userService.getUser);
app.get('/api/registered_users', userService.getRegisteredUsers);
app.get('/api/classmates', userService.getClassmates);