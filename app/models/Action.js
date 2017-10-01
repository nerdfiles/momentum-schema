const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const actionSchema = new mongoose.Schema({
  actionStatus: {
    type: ObjectId,
    ref: 'ActionStatusType'
    required: true
  },
  agent: {
    type: ObjectId,
    ref: 'User'
    required: true
  },
  endTime: {
    type: String
  },
  location: {
    type: ObjectId,
    ref: 'Place'
  },
  participant: {
    type: ObjectId,
    ref: 'User'
  },
  startTime: {
    type: String
  },
  target: {
    type: ObjectId,
    ref: 'EntryPoint'
  }
}, {
  timestamps: true,
  id: false
})

const Action = mongoose.model('Action', actionSchema)

module.exports = Action
