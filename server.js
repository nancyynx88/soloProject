const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
app.use(express.json());
const controller = require('./controller');

const mongoURI = 'mongodb+srv://naixinyang:8871188711@cluster0.zsizchb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'feedLogs',
  }).then(() => console.log('Connected to Mongo DB.'))
     .catch((err) => console.log(err));
     
//user read log, server get data from database
app.get('/api', controller.getFeed, (req, res)=>{
    return res.status(200).json({});
})
// user create, server put timestamp frontend to the database
app.post('/api', controller.postFeed, (req, res) =>{
return res.status(200).json(res.locals.log);
})

//use .use to catch all kind of request error
app.use('*', (req, res) => {
    return res.status(404);
})

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknow middleware error',
        status: 400,
        message: { err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

//only use this when testing
// module.exports = app;
