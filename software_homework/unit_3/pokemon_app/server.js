require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')
const Poke = require('./models/Poke.js')

app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once('open', () => {
    console.log('connected to mongo!');
  });
  
  app.use(express.urlencoded({ extended: false }))
  
  app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
  })

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', function(req, res){
    Poke.find({})
    .then((allPokemon) => {
      res.render('Index', { pokemon: allPokemon });
    })
    .catch((err) => console.error(err));
    
})

app.get('/pokemon/new', (req, res) => {
    res.render('New');
  })
  
  
  
  app.post('/pokemon', (req, res) => {
    
    Poke.create(req.body)
      .then((createdPokemon) => {
        res.redirect('/pokemon')
      })
      .catch((err) => console.error(err));
  });



app.get('/pokemon/:id', (req, res)=>{
    Poke.findOne({ _id: req.params.id })
    .then((foundPokemon) => {
      res.render('Show', {
        singlePokemon: foundPokemon
      });
    })
    .catch(err => console.error(err))
})



app.listen(port, () => {
    console.log('listening on port 3000');
});