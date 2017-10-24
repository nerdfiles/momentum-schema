const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const eventSchema = new mongoose.Schema({
  name: String
})

const __Event__ = mongoose.model('Event', eventSchema)

/**
 * Exports
 */

module.exports = __Event__
