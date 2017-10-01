const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const amountSchema = new mongoose.Schema({
  event: {
    type: ObjectId,
    ref: 'Event',
    required: true
  },
  amountDue: {
    type: Number
  },
  amountPaid: {
    type: Number
  },
  amountPaid: {
    type: Number
  },
  amountPending: {
    type: Number
  },
  paymentSource: {
    type: String
  },
  subtotal: {
    type: Number
  }
}, {
  timestamps: true,
  id: false
})

const Amount = mongoose.model('Amount', amountSchema)

module.exports = Amount
