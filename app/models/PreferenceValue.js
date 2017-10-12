const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const preferenceValueSchema = new mongoose.Schema({
  name: String
})

const PreferenceValue = mongoose.model('PreferenceValue', preferenceValueSchema)

module.exports = PreferenceValue
