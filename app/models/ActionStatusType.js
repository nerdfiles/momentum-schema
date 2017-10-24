const mongoose = require('mongoose')

const ObjectId =  mongoose.Schema.Types.ObjectId

const actionStatusTypeSchema = new mongoose.Schema({
  name: String
})

const ActionStatusType = mongoose.model('ActionStatusType', actionStatusTypeSchema)

/**
 * Exports
 */

module.exports = ActionStatusType
