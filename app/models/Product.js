const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Type.ObjectId

const productSchema = new mongoose.Schema({
  name: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
