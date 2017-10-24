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


const PostalAddress = mongoose.model('PostalAddress', postalAddressSchema)

/**
 * Exports
 * @description We import the schema from SEO semantics more generally and
 * combine with WOT addrresses to genericize the concept of identity to describe
 * gravitional signatures within Minkowski block space universe succh that
 * timelessness is abstracted to the notion of four-dimensional that are
 * materialized within the conditions of value.
 */

module.exports = PostalAddress
