"use strict";
const app = require('./server');
const jwt = require('express-jwt');
const userService = require('./services/profile/user-profile.service');
const config = require('./config.json');


// app.use('/api/user', jwt({secret: config.secret}));

app.get('/api/user', userService.getUser);
app.post('/api/user', userService.postUser);
app.put('/api/user', userService.updateUser);
app.put('/api/classmates', userService.updateClassmates);
app.post('/api/stripe_record', userService.postStripeRecord);
app.get('/api/user/:id', userService.getUser);
app.get('/api/all_users', userService.getAllUsers);
app.get('/api/classmates', userService.getClassmates);