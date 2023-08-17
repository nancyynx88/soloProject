// const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://naixinyang:8871188711@cluster0.zsizchb.mongodb.net/?retryWrites=true&w=majority';

const Schema = mongoose.Schema;

const logSchema = new Schema({
  log: {
    type : String,
    require: true,
  }
});

const Log = mongoose.model('Log', logSchema);

module.exports = {
  Log,
};
