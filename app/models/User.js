const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  giveName: {
    type: String,
    unique: false,
    required: true
  }
}, {
  timestamps: true,
  id: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
