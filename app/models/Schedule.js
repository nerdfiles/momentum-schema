const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const scheduleSchema = new mongoose.Schema({
  name: String
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
