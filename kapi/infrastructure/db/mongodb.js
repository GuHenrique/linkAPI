const mongoose = require('mongoose');
let logFile = 'kapi/infrastructure/db/mongodb.js'

async function mongoConnection(){
  
  return await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    Hermodr.log(logFile, "Banco Conectado")
  }).catch((error) => {

    Hermodr.error(logFile, error)
  })
}


module.exports = mongoConnection();