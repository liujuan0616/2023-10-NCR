const mongoose = require('mongoose');

const commentSchema=new mongoose.Schema({
  heading: {type:String,required: true},
  text: {type:String,required: true},
  

}
,{timeStamps: true})

const logSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: {type: Boolean, default: true, required: true},
  comments:[commentSchema]
  
},{timestamps: true}
);

const Log = mongoose.model('Log', logSchema);

module.exports = Log;