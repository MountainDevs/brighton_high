"use strict";
const app = require('./server');
const jwt = require('express-jwt');
const userService = require('./services/profile/user-profile.service');
const stripeService = require('./services/stripe/stripe');
const csvService = require('./services/csv/csv.service');
const config = require('./config.json');



app.post('/api/user', userService.postUser);
app.put('/api/user', userService.updateUser);
app.put('/api/user/show_profile', userService.updateShowProfile);
app.get('/api/user', userService.getUser);
app.put('/api/classmates', userService.updateClassmates);
app.get('/api/user/:id', userService.getUser);
app.get('/api/all_users', userService.getAllUsers);
app.get('/api/displaying_users', userService.getDisplayingUsers);
app.get('/api/registered_users', userService.getRegisteredUsers);
app.get('/api/classmates', userService.getClassmates);
app.post('/api/stripe_record', userService.postStripeRecord);
app.post('/api/stripe/create_charge', stripeService.createCharge);
app.post('/api/export_csv', function (req, res, next) {
  try {
    csvService.createCSV(req.body);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});