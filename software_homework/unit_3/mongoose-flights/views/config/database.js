const mongoose = require('mongoose')



    
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

mongoose.connect(mongoURI)

db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: "))
db.on("close", () => console.log("mongo disconnected"))

module.exports = mongoose;