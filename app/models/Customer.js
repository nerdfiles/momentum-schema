const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true,
  id: false
})

const Customer = mongoos.model('Customer', customerSchema)

module.exports = Customer
