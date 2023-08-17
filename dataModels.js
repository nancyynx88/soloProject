const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://naixinyang:8871188711@cluster0.zsizchb.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'feedLog',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const logSchema = new Schema({
  log: {
    type : String,
    require: true,
  }
});

const log = mongoose.model('log', logSchema);

model.export = {
  Log,
};
