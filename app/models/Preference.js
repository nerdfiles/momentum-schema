const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const preferenceSchema = new mongoose.Schema({
  name: String
})

const Preference = mongoose.model('Preference', preferenceSchema)

/**
 * Exports
 */

module.exports = Preference
