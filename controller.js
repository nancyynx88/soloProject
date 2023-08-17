const express = require('express');
const app = express();
const path = require('path');
const PORT = 9500;
const models = require('./dataModels');
app.use(express.json());
const mongoose = require('mongoose');
const {Log} = require('./dataModels');

const controller = {};

controller.getFeed = async (req, res, next) => {
  try {
    //get the request data, morning or evening, and get the time stamp of that
  } catch (error) {
    next(error);
  }
};
//export the controller object
controller.postFeed = async (req, res, next) => {
  try {
    const { log } = req.body; //destructuring, const log = req.body.log
    console.log('*** Inside POST FEED method ***');
    if (!log) {
      return next({
        log: 'Middleware postFeed method receive data error',
        status: 500,
        message: { err: 'Post method did not receive correct message' },
      });
    }
    // console.log('req.body: ', req.body);
    res.locals.log = log;
    console.log('res.locals.log: ', res.locals.log);
    const newLog = new Log ({log});
    console.log('create new log successfully: ' + newLog);
    await newLog.save();
    console.log('New log saved successfully');
    return next();
  } catch (error) {
    console.error('Error saving new log:', error);
    next({
      log: 'Middleware postFeed method error',
      status: 500,
      message: { err: 'Post method middleware postFeed function error' },
    });
  }
};
module.exports = controller;
