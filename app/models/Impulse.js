const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const impulseSchema = new mongoose.Schema({
  impulse: [{
    _id: false,
    force: {
      type: ObjectId,
      ref: 'Amount',
      required: true
    }
  }]
}, {
  timestamps: true,
  id: false
})

const Impulse = mongoose.model('Impulse', impulseSchema)

/**
 * Exports
 */

module.exports = Impulse
