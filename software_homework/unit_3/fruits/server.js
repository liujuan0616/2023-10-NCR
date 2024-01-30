require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const Fruit = require('./models/Fruit.js')
const Vegetable = require('./models/Vegetable.js')
const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require('./models/vegetables.js')

app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once('open', () => {
    console.log('connected to mongo!');
  });
  

  //near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//INDUCES

//index



  app.get('/fruits', function(req, res){
    Fruit.find({})
    .then((allFruits) => {
      res.render('fruits/Index', { fruits: allFruits });
    })
    .catch((err) => console.error(err));
});

app.get('/vegetables', function(req, res){
    Vegetable.find({})
    .then((allVegetables) => {
      res.render('Vegetables/Index', {vegetables: allVegetables });
    })
    .catch((err) => console.error(err));
})

//New
app.get('/fruits/new', (req, res)=>{
    res.render('fruits/New')
})

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

//Delete

//Update


//Create

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect('/fruits')
    })
    .catch((err) => console.error(err));
})

app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    }
    else{
        req.body.readyToEat = false
    }
    Vegetable.create(req.body)
    .then((createdVegetable) => {
      res.redirect('/vegetables')
    })
    .catch((err) => console.error(err));
})

//Edit


//Show

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });

//add show route
app.get('/fruits/:id', function(req, res){
    Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render('Show', {
        fruit: foundFruit
      });
    })
    .catch(err => console.error(err))
});  

app.get('/vegetables/:id', function(req, res){
    Vegetable.findOne({ _id: req.params.id })
    .then((foundVegetable) => {
      res.render('Show', {
        vegetable: foundVegetable
      });
    })
    .catch(err => console.error(err))
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});