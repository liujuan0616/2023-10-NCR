const express = require('express');
const app = express();
const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require('./models/vegetables.js')

app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());


  //near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//INDUCES

//index



  app.get('/fruits', function(req, res){
    res.render('fruits/Index', { fruits: fruits });
});

app.get('/vegetables', function(req, res){
    res.render('vegetables/Index', { vegetables: vegetables})
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
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruits');
})

app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    }
    else{
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    console.log(vegetables)
    res.redirect('/vegetables')
})

//Edit


//Show

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });

//add show route
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});  

app.get('/vegetables/:indexOfVegetablesArray', function(req, res){
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.indexOfVegetablesArray]
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});