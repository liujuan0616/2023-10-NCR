require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const Log = require('./models/Log.js');
 const methodOverride = require('method-override');
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('connected to mongo!');
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})


// Index

app.get('/logs', (req, res) => {
    Log.find({})
      .then((allLogs) => {
        res.render('Index', { logs: allLogs });
      })
      .catch((err) => console.error(err));
  });
  
  // New
  
  app.get('/logs/new', (req, res) => {
    const newLog = new Log ()
    const defaultShipIsBroken = newLog.shipIsBroken
    res.render('New',{defaultShipIsBroken});
  })

  // Delete

app.delete('/logs/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id })
      .then(deleteInfo => {
        console.log(deleteInfo)
        res.redirect('/logs')
      })
      .catch(err => console.error(err));
  })

  // Update

app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    Log.updateOne({ _id: req.params.id }, req.body)
      .then(updateInfo => {
        console.log(updateInfo);
        res.redirect(`/logs/${req.params.id}`)
      })
      .catch(err => console.error(err));
  })

  // Create

app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    Log.create(req.body)
      .then((createdLog) => {
        res.redirect('/logs')
      })
      .catch((err) => console.error(err));
  });

  // Edit

app.get('/logs/:id/edit', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then(foundLog => res.render('Edit',
        {
          log: foundLog
        }))
      .catch(err => console.error(err));
  })

// Show

app.get('/logs/:id', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then((foundLog) => {
        res.render('Show', {
          log: foundLog
        });
      })
      .catch(err => console.error(err))
  });




  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
