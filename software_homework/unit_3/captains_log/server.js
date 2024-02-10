require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const Log = require('./models/Log.js');
 const methodOverride = require('method-override');

const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);

db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected!'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})

const logsController = require('./controller/logsController.js')
app.use('/logs',logsController)


  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
