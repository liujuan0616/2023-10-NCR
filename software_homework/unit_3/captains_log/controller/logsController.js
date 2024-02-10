////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Log = require("../models/Log.js");


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// Index

router.get('/', (req, res) => {
    Log.find({})
      .then((allLogs) => {
        res.render('Index', { logs: allLogs });
      })
      .catch((err) => console.error(err));
  });
  
  // New
  
  router.get('/new', (req, res) => {
    const newLog = new Log ()
    const defaultShipIsBroken = newLog.shipIsBroken
   
    res.render('New',{defaultShipIsBroken});
  })

  // Delete

router.delete('/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id })
      .then(deleteInfo => {
        console.log(deleteInfo)
        res.redirect('/logs')
      })
      .catch(err => console.error(err));
  })

  // Update

router.put('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

  // router.post('/:id',(req,res)=>{
  //   Log.create(req.body.comments)
  //     .then((createdComment)=>{
  //       res.redirect('/logs/:id')
  // })
    
  // })

  // Edit

router.get('/:id/edit', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then(foundLog => res.render('Edit',
        {
          log: foundLog
        }))
      .catch(err => console.error(err));
  })

// Show

router.get('/:id', (req, res) => {
   
    Log.findOne({ _id: req.params.id })
      .then((foundLog) => {
        res.render('Show', {
          log: foundLog
        });
      })
      .catch(err => console.error(err))
  });







//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;