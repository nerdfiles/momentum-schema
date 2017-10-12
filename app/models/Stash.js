const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const stashSchema = new mongoose.Schema({
  customer: {
    type: ObjectId,
    ref: 'Customer'
  },
  answers: [{
    type: objectid,
    ref: 'Answer'
  }],
  preferences: [{
    type: objectid,
    ref: 'PreferenceValue'
  }],
  products: [{
    type: ObjectId,
    ref: 'Product'
  }]
})

const Stash = mongoose.model('Stash', stashSchema)

module.exports = Stash
