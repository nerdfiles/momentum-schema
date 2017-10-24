const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const answerAnswer = new mongoose.Schema({
  text: {
    type: String,
    unique: false,
    required: true
  },
  question: {
    type: ObjectId,
    ref: 'Question',
    required: true
  },
  value: {
    type: Number,
    required: false,
    default: 1
  }
}, {
  timestamps: true,
  id: true
})

const Answer = mongoose.model('Answer', answerSchema)

/**
 * Exports
 */

module.exports = Answer
