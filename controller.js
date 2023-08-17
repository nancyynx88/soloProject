const express = require('express');
const app = express();
const path = require('path');
const PORT = 9500;
// const router = expre.Router();
// router = require('./controller');

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
  // try {
    const { log } = req.body;
    console.log('*** Inside POST FEED method ***');
    // if(!log){
    //   return next({
    //     log: 'Middleware postFeed method receive data error',
    //     status: 500,
    //     message: { err: 'Post method did not receive request message'},
    //   });
    // }
    console.log('req.body: ', req.body)
    res.locals.log = log;
    console.log('res.locals.log: ', res.locals.log);
    //  const createLog = await Log.create({log});
    return next();
  // } catch (error) {
  //   next( {
  //     log: 'Middleware postFeed method error',
  //   status: 500,
  //   message: { err: 'Post method middleware postFeed function error'},
  // });
  // }
};
module.exports = controller;
