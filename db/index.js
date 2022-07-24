const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://alexcampo5:GASEI2022@cluster0.6yptjno.mongodb.net/WorldSoccerDb'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
