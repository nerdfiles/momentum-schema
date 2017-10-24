const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const brandSchema = new mongoose.Schema({
  full_name: String,
  name: String,
  slug: String,
  type: {
    type: ObjectId,
    ref: 'Brand'
  },
  logo_image: {
    type: ObjectId,
    ref: 'Asset'
  },
  canonical_image: {
    type: ObjectId,
    ref: 'Asset'
  },
  origin: String,
  position: Number
})

const Brand = mongoose.model('Brand', brandSchema)

/**
 * Exports
 */

module.exports = Brand
