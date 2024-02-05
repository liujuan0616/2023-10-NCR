require('dotenv').config()

const express = require('express')
const Flight = require('./models/Flight.js')
const methodOverride = require('method-override');
const app = express()
require ('./views/config/database.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})
//Index

app.get('/flights', (req, res) => {

    Flight.find({}).sort({arrival:1}).exec()
      .then((allFlights) => {
        res.render('Index', { flights: allFlights });
      })
      .catch((err) => console.error(err));
  });
// New

app.get('/flights/new', (req, res) => {
  const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
  const departAirport= newFlight.airport
  
  
	res.render('New', {departsDate,departAirport});

  })

//Show
  app.get('/flights/:id', (req, res) => {
    Flight.findOne({ _id: req.params.id })
      .then((foundFlight) => {
        res.render('Show', {
          flight: foundFlight
        });
      })
      .catch(err => console.error(err))
  });

  //Edit
  app.get('/flights/:id/edit', (req, res) => {
    Flight.findOne({ _id: req.params.id })
      .then(foundFlight => res.render('Edit',
        {
          flight: foundFlight
        }))
      .catch(err => console.error(err));
  })

//Update

  app.put('/flights/:id', (req, res) => {
    
    Flight.updateOne({ _id: req.params.id }, 
      { $push: { destinations: req.body } })
      .then(updateInfo => {
        console.log(updateInfo);
        res.redirect(`/flights/${req.params.id}`)
      })
      .catch(err => console.error(err));
  })

//Post
app.post('/flights', (req, res) => {
   
    Flight.create(req.body)
      .then((createdFlight) => {
        res.redirect('/flights')
      })
      .catch((err) => console.error(err));
      
  });

  app.listen(3000)

