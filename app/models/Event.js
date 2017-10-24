const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const categorySchema = new mongoose.Schema({
  name: String
})

const Event = mongoose.model('Event', eventSchema)

/**
 * Exports
 */

module.exports = Event
