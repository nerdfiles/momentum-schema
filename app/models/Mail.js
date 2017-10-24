const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const mailSchema = new mongoose.Schema({
  name: String
})

const Mail = mongoose.model('Mail', mailSchema)

/**
 * Exports
 */

module.exports = Mail
