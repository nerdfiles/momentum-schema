const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const weightSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: 'Product'
  },
  question: {
    type: ObjectId,
    ref: 'Question'
  },
  coefficient: Number
})

const Weight = mongoose.model('Weight', weightSchema)

module.exports = Weight
