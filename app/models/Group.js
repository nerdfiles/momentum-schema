const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const groupSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: 'Product'
  },
  resolution: Number,
  units: Number
})

const Group = mongoose.model('Group', groupSchema)

/**
 * Exports
 */

module.exports = Group
