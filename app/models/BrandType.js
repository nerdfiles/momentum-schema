const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const brandTypeSchema = new mongoose.Schema({
  name: String
})

const BrandType = mongoose.model('BrandType', brandTypeSchema)

/**
 * Exports
 */

module.exports = BrandType
