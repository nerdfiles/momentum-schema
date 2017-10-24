const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const refillSchema = new mongoose.Schema({
  refill: {
    type: ObjectId,
    ref: 'Product'
  }
  interval: Number
})

const Refill = mongoose.model('Refill', refillSchema)

/**
 * Exports
 */

module.exports = Refill
