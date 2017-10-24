const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const categorySchema = new mongoose.Schema({
  name: String
}, {
  timestamps: true,
  id: false
})

const Category = mongoose.model('Category', categorySchema)


/**
 * Exports
 */

module.exports = Category
