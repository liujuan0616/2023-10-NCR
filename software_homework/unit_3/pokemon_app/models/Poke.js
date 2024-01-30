const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
   name: {type: String, required: true},
   img: {type: String, required:true}
  
});

const Poke = mongoose.model('Pokemon', pokemonSchema);

module.exports = Poke;