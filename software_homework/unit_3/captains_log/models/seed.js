///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
require('dotenv').config()
const mongoose = require('mongoose');
const Log = require('./Log');


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error(err));

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

 const startLogs=[{
    title: 'Stardate 57436.3',
    entry: "The ship's holodeck malfunctioned today, creating a surreal and unpredictable simulation of 19th-century Earth. Crew members found themselves in a Wild West town, facing holographic outlaws and engaging in an unexpected hoedown. It took the combined efforts of Lieutenant Rutherford and Ensign Tendi to reprogram the holodeck and restore order. The incident left the crew with a newfound appreciation for the importance of routine maintenance.",
    shipIsBroken: false
  },
  {
    title: 'Stardate 57436.4',
    entry: "Captain Freeman initiated a shipwide talent show as a team-building exercise. Surprisingly, Commander Ransom showcased his tap-dancing skills, while Dr. T'Ana delivered a stand-up comedy routine that had the entire crew in stitches. However, the performance that stole the show was Lieutenant Shaxs' operatic rendition of Klingon war hymns. The talent show concluded with a sense of camaraderie and laughter, reinforcing the bond among the diverse crew members.",
    shipIsBroken: false
  },
  {
    title: 'Stardate 57436.5',
    entry: "A mysterious spatial anomaly temporarily transported the Cerritos to an uncharted sector of the galaxy. While stranded, the crew encountered a species of sentient energy beings who communicated through intricate light displays. Through diplomatic negotiations led by Ensign Boimler, the Cerritos formed an alliance with the energy beings, exchanging knowledge about warp technology in return for insights into subspace anomalies. The encounter expanded our understanding of the cosmos.",
    shipIsBroken: false
  }]



  
      Log.insertMany(startLogs)
        .then(res => {
          console.log(res);
          mongoose.connection.close();
        })
        .catch(err => {
          console.error(err);
          db.close();
        })
    
    .catch(err => {
      console.error(err);
      mongoose.connection.close();
    });
