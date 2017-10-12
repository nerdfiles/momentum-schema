const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const productSchema = new mongoose.Schema({
  name: String
})

const Question = mongoose.model('Question', productSchema)

module.exports = Question
