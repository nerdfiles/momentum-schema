const mongoose = require('mongoose')

const ObjectId =  mongoose.Schema.Types.ObjectId

const postalAddressSchema = new mongoose.Schema({
  name: String,
  streetAddress: String,
  postalCode: String,
  addressRegion: String,
  addressLocality: String,
  addressCountry: String
})

/**
 * Exports
 */

const PostalAddress = mongoose.model('PostalAddress', postalAddressSchema)

module.exports = PostalAddress
