const express = require('express');
const app = express();
const path = require('path');
const PORT = 9500;
const router = expre.Router();
router = require('./controller');

app.use(express.json());

const controller = {};
controller.getFeed = async (req, res, next) => {
  try {
    //get the request data, morning or evening, and get the time stamp of that
  } catch (error) {
    next(error);
  }
};
//export the controller object
controller.postFeed = (req, res, next) => {
  try {
    res.locals.log = req.body;
    return next();
  } catch (error) {
    next(error);
  }
};
module.exports = controller;
