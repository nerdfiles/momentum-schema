const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const formatSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: 'Product'
  },
  preference_value: {
    type: ObjectId,
    ref: 'PreferenceValue'
  }
}, {
  timestamps: true,
  id: false
})

const Format = mongoose.model('Format', formatSchema)

module.exports = Format
