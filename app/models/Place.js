const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const placeSchema = new mongoose.Schema({
  name: String
})

const Place = mongoose.model('Place', placeSchema)

/**
 * Exports
 */

module.exports = Place
