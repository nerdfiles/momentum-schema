const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const balanceSchema = new mongoose.Schema({
  profit: [{
    _id: false,
    credit: {
      type: ObjectId,
      ref: 'Amount',
      required: true
    }
  }],
  loss: [{
    _id: false,
    debit: {
      type: ObjectId,
      ref: 'Amount',
      required: true
    }
  }]
}, {
  timestamps: true,
  id: false
})

const Balance = mongoose.model('Balance', balanceSchema)

/**
 * Exports
 */

module.exports = Balance
