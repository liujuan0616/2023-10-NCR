const mongoose = require('mongoose')
const {Schema,model}=mongoose

const destinationSchema = new Schema({
  airport0:{
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },
    arrival:{
       type: Date,
       required: true,
    }

})

const flightSchema = new Schema(
    {
       airline: {type: String, 
        enum: ['American', 'Southwest', 'United'],
                required: true},
        flightNo: {
            type: Number,
            required: true,
            min: 10,
            max: 9999,
          },
          departs:{
            type: Date,
            default: () => {
              // Logic to set the default departure date to one year from the current date
              const oneYearFromNow = new Date();
              oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
             
              return oneYearFromNow;},
            required: true,
          },
          airport:{
            type: String,
             enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
           default: 'SAN',
           required: true
        },
          destinations: {
            type:[destinationSchema],
            required: true,
          }
       
    
}
)

const Flight = model("Flight", flightSchema);
module.exports = Flight